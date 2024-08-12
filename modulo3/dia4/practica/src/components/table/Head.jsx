import React from 'react'
import { Th } from './Th'

export function Head({aColuma}) {
  return (
    <thead>
        <tr>
        {
            aColuma.map(th => 
                <Th key={th.id} texto={th.columna}/>
            )
        }
        </tr>
    </thead>
  )
}
