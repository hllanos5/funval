import React from 'react'
import { Tr } from './Tr'

export function Body({aFila}) {
  return (
    <tbody>
        {
            aFila.map(obj => 
                <Tr key={obj.id} aFila={obj}/>
            )
        }
    </tbody>
  )
}
