import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PdfContext from './context/PdfContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PdfContext>
     <App />
    </PdfContext>
  </StrictMode>,
)
