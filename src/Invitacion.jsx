import React from 'react'

const invitation = {
    remitente : 'Personaje',
    lugar: 'Pais'
}


export const Invitacion = () => {
    
  return (
    <>
    <h1> {invitation.remitente} te ha invitado a {invitation.lugar}</h1>    
    </>
  )
}
