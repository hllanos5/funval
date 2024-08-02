import React from 'react'
import { Td } from './Td'

export function Tr({aFila}) {
    
  return (
    <tr>
        {
        Object.keys(aFila).map((key) => (
            <Td id={key} texto = {aFila[key]}/>
        ))
      }
    </tr>
  )
}
