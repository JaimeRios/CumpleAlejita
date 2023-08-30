import React from 'react' 
import PropTypes from 'prop-types'

export function Invitacion ({ remitente, lugar, link }) {
    
  return (
    <>
    <h1> {remitente} te ha invitado a {lugar}</h1>
    <Link to={link}>Aceptar</Link> 
    </>
  )
}

Invitacion.propType = {
  remitente: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
}