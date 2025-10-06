import { useState, useMemo } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import { widgetRegistry } from '../widgetConfig';
import { WidgetTile } from './WidgetTile';
import { DevTools } from './DevTools';

/**
 * Main Dashboard Component
 *
 * Displays all enabled widgets in a responsive grid layout
 * Features:
 * - Drag and drop widget positioning
 * - Responsive grid system
 * - Development tools for testing
 */
export function Dashboard() {
  const [showAllWidgets, setShowAllWidgets] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);

  // Get widgets to display
  const widgets = useMemo(() => {
    return Object.entries(widgetRegistry)
      .filter(([, config]) => showAllWidgets || config.enabled)
      .map(([key, config]) => ({ key, ...config }));
  }, [showAllWidgets]);

  // Generate layout configuration
  const layout = useMemo(() => {
    return widgets.map((widget, index) => ({
      i: widget.key,
      x: (index * widget.gridSize.w) % 12,
      y: Math.floor((index * widget.gridSize.w) / 12) * widget.gridSize.h,
      w: widget.gridSize.w,
      h: widget.gridSize.h,
      minW: 2,
      minH: 2,
    }));
  }, [widgets]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                React Hooks Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Learn useState and useEffect through interactive widgets
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Active Widgets</div>
                <div className="text-2xl font-bold text-primary-600">
                  {widgets.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {widgets.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No widgets enabled yet
            </h2>
            <p className="text-gray-600 mb-4">
              Enable the DevTools panel to see all available widgets
            </p>
            <p className="text-sm text-gray-500">
              Students: Complete your widget and set enabled: true in widgetConfig.js
            </p>
          </div>
        ) : (
          <div className="mb-4 flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isDraggable}
                onChange={(e) => setIsDraggable(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Enable drag & resize (for layout adjustment)</span>
            </label>
          </div>
        )}
        {widgets.length > 0 && (
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={100}
            width={1200}
            isDraggable={isDraggable}
            isResizable={isDraggable}
            compactType="vertical"
            preventCollision={false}
            draggableHandle={isDraggable ? undefined : ".drag-handle"}
          >
            {widgets.map((widget) => (
              <div key={widget.key}>
                <WidgetTile widget={widget} widgetKey={widget.key} isDraggable={isDraggable} />
              </div>
            ))}
          </GridLayout>
        )}
      </main>

      {/* Development Tools */}
      <DevTools
        showAllWidgets={showAllWidgets}
        onToggleShowAll={setShowAllWidgets}
      />
    </div>
  );
}
