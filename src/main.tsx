import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'

// Nothing in the import graph may throw at module-evaluation time, otherwise the
// whole bundle dies before React mounts and the page stays black. Errors are
// therefore contained here and in ErrorBoundary.

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>,
  )
} else {
  document.body.innerHTML =
    '<p style="padding:32px;font-family:system-ui,sans-serif;color:#c9ced6">' +
    'Mount point #root is missing from index.html.</p>'
}
