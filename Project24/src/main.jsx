import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FeatureFlagProvider } from './components/feature-flag/context/index.jsx'
import {BrowserRouter} from 'react-router-dom'
import { store } from './components/ShoppingCart/store/index.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <StrictMode>
    <FeatureFlagProvider>
    <App />
  </FeatureFlagProvider>
  </StrictMode>
  </BrowserRouter>
  </Provider>
)
