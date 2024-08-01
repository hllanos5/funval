import React from 'react'

export function Button({dato}) {
  return (
    <button id={dato.id}>{dato.contenido}</button>
  )
}
