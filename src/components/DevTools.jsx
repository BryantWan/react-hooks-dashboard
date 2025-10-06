import { useState } from 'react';
import { widgetRegistry } from '../widgetConfig';

/**
 * DevTools Component
 *
 * Development-only panel for testing and debugging widgets
 * Features:
 * - Toggle all widgets visibility
 * - Clear localStorage
 * - View widget registry
 */
export function DevTools({ showAllWidgets, onToggleShowAll }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClearStorage = () => {
    if (confirm('Clear all localStorage data?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const enabledCount = Object.values(widgetRegistry).filter(w => w.enabled).length;
  const totalCount = Object.keys(widgetRegistry).length;

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        🛠️ DevTools
      </button>

      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-white rounded-lg shadow-xl border border-gray-200 w-80 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Development Tools</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            {/* Widget Status */}
            <div className="bg-gray-50 rounded p-3">
              <div className="text-sm font-medium text-gray-700 mb-1">Widget Status</div>
              <div className="text-xs text-gray-600">
                {enabledCount} of {totalCount} widgets enabled
              </div>
            </div>

            {/* Show All Widgets Toggle */}
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer">
              <span className="text-sm font-medium text-gray-700">Show All Widgets</span>
              <input
                type="checkbox"
                checked={showAllWidgets}
                onChange={(e) => onToggleShowAll(e.target.checked)}
                className="w-4 h-4"
              />
            </label>

            {/* Clear Storage */}
            <button
              onClick={handleClearStorage}
              className="w-full bg-red-50 text-red-600 px-3 py-2 rounded text-sm font-medium hover:bg-red-100 transition-colors"
            >
              Clear localStorage
            </button>

            {/* Widget List */}
            <div className="bg-gray-50 rounded p-3 max-h-64 overflow-y-auto">
              <div className="text-sm font-medium text-gray-700 mb-2">All Widgets</div>
              <div className="space-y-1">
                {Object.entries(widgetRegistry).map(([key, widget]) => (
                  <div key={key} className="text-xs flex items-center justify-between">
                    <span className={widget.enabled ? 'text-green-600' : 'text-gray-400'}>
                      {widget.enabled ? '✓' : '○'} {widget.title}
                    </span>
                    <span className="text-gray-500">{widget.difficulty[0].toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
