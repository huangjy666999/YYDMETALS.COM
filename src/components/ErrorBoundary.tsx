import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

/**
 * Catches render-time errors so one failing page can never blank the whole site.
 * Without it, any thrown error inside the tree leaves <div id="root"> empty and
 * the visitor only sees the dark body background.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep details in the console for debugging; never render raw stack traces.
    console.error('[YYD METALS] render error:', error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div className="section">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.6rem',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}
          >
            YYD METALS
          </div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '14px' }}>Something went wrong</h2>
          <p className="text-muted" style={{ marginBottom: '26px' }}>
            页面加载出现问题，请刷新重试。If the problem continues, please contact{' '}
            <a style={{ color: 'var(--accent)' }} href="mailto:info@yydmetals.com">
              info@yydmetals.com
            </a>
            .
          </p>
          <button className="btn btn--primary" type="button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </div>
      </div>
    )
  }
}
