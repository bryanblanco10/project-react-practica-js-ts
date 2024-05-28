import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //No funciona en production, es bueno para desarrolladar, esto hace que el efecto se ejecute dos veces
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
