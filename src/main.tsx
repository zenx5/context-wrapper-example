import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWith from './with-context-wrapper/AppWith'
import AppWithout from './without-context-wrapper/AppWithout'

createRoot(document.getElementById('root1')!).render(
  <StrictMode>
    <AppWith />
  </StrictMode>,
)

createRoot(document.getElementById('root2')!).render(
  <StrictMode>
    <AppWithout />
  </StrictMode>,
)

