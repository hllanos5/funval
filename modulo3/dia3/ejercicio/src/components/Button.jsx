import React from 'react'

export function Button({dato, toggleModal}) {
  return (
    <button id={dato.id} onClick={toggleModal}>{dato.contenido}</button>
  )
}
