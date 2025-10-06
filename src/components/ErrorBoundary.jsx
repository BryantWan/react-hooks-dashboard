import { Component } from 'react';

/**
 * Error Boundary Component
 *
 * Catches errors in child components and displays a fallback UI
 * Useful for isolating widget errors and preventing app crashes
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Widget Error:', this.props.widgetName, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded p-4 text-center">
          <div className="text-red-600 font-medium mb-2">
            ⚠️ Widget Error
          </div>
          <p className="text-sm text-red-500 mb-2">
            {this.props.widgetName} encountered an error
          </p>
          <p className="text-xs text-gray-600 mb-3">
            {this.state.error?.message || 'Unknown error'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
