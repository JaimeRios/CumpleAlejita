import React from 'react' 
import PropTypes from 'prop-types'

const invitation = {
    remitente : 'Personaje',
    lugar: 'Pais'
}


export const Invitacion = ({ remitente, lugar }) => {
    
  return (
    <>
    <h1> {remitente} te ha invitado a {lugar}</h1>    
    </>
  )
}

Invitacion.propType = {
  remitente: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
}