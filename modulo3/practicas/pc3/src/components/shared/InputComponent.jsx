import React from 'react'

export function InputComponent({input}) {
  return (
    <label htmlFor={input.identificado}>
        <input className={input.clase} id={input.identificador} type={input.tipo} value="0" min={input.minnimo}/>
    </label>
  )
}
