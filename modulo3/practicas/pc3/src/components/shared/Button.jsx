import React from 'react'

export function Button({aButton, valor, handleInput}) {
  return (
    aButton.map(obj => 
        <li id={`percentage-${obj.porcentaje}`}><button type={obj.type} onClick={handleInput} name={obj.name} className={`percentage-button ${valor === obj.porcentaje && 'active'}`} value={obj.porcentaje}>{obj.porcentaje}%</button></li>
      ) 
  )
}
