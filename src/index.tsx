import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import ErrorBoundary from './components/shared/ErrorBoundary'
import FullScreenMessage from './components/shared/FullScreenMessage'
import { ModalContext } from './contexts/ModalContext'
import reportWebVitals from './reportWebVitals'

import './scss/global.scss'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContext>
        <ErrorBoundary fallbackUI={<FullScreenMessage type="error" />}>
          <Suspense fallback={<FullScreenMessage type="loading" />}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </ModalContext>
    </QueryClientProvider>
  </React.StrictMode>,
)

reportWebVitals()
