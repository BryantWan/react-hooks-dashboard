import { Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

/**
 * WidgetTile Component
 *
 * Wrapper component for individual widgets that provides:
 * - Error boundary for graceful error handling
 * - Suspense for lazy loading
 * - Consistent styling
 */
export function WidgetTile({ widget, widgetKey, isDraggable }) {
  const Widget = widget.component;

  return (
    <div className="widget-tile h-full flex flex-col">
      <div className={`flex items-center justify-between mb-3 pb-2 border-b border-gray-200 ${isDraggable ? 'drag-handle cursor-move' : ''}`}>
        <h3 className="text-lg font-semibold text-gray-800">{widget.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded ${
            widget.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
            widget.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {widget.difficulty}
          </span>
          {widget.author && (
            <span className="text-xs text-gray-500">by {widget.author}</span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <ErrorBoundary widgetName={widget.title}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              </div>
            }
          >
            <Widget />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
