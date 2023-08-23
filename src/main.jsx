import React from 'react'
import ReactDOM from 'react-dom/client'
import './CumpleAlejitaMain.css'
import './Juego.css'

import { CumpleAlejitaMain }  from './CumpleAlejitaMain.jsx'
import { Invitacion } from './Invitacion'
import { Juego } from './Juego'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Juego challenger={'Yuli'} wordValue={'INCONDICIONALIDAD'}/>
  </React.StrictMode>,
)
