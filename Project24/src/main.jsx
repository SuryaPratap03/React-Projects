import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FeatureFlagProvider } from './components/feature-flag/context/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeatureFlagProvider>
    <App />
  </FeatureFlagProvider>
  </StrictMode>
)
