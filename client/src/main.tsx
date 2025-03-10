import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>  
    </React.StrictMode>
  </React.StrictMode>,
)
