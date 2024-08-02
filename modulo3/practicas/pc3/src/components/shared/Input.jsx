import React from 'react'

export function Input({input, valor, handleInput}) {
   
  return (
    <label htmlFor={input.identificado}>
        <input 
        name = {input.name}
        className={input.clase} 
        id={input.identificador}
        type={input.tipo} 
        value={valor}
        min={input.minnimo}
        onChange={handleInput} />
    </label>
  )
}
