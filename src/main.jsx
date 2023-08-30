import React from 'react'
import ReactDOM from 'react-dom/client'
import './CumpleAlejitaMain.css'
import './pages/Juego.css'

import { CumpleAlejitaMain }  from './CumpleAlejitaMain.jsx'
import { Invitacion } from './Invitacion'
import { Juego } from './pages/Juego'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>      
      <CumpleAlejitaMain />
    </BrowserRouter>
  </React.StrictMode>,
)
