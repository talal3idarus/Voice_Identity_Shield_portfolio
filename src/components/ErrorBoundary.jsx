import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-dark p-4">
          <div className="max-w-md w-full bg-card rounded-2xl p-8 border border-border/50">
            <div className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-text-primary mb-4">
                Something went wrong
              </h1>
              <p className="text-text-secondary mb-6">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary hover:bg-accent text-dark rounded-xl font-medium transition-colors"
              >
                Reload Page
              </button>
              <details className="mt-6 text-left">
                <summary className="text-text-secondary cursor-pointer text-sm mb-2">
                  Error Details
                </summary>
                <pre className="text-xs text-text-secondary bg-dark p-4 rounded-lg overflow-auto">
                  {this.state.error?.stack || this.state.error?.toString()}
                </pre>
              </details>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

