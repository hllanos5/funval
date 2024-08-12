import React from 'react'
import { Head } from './Head'
import { Body } from './Body'

export function Table({table}) {
  return (
    <table id={table.identificador}>
        <Head aColuma={table.aCabecera}/>
        <Body aFila={table.aFila}/>
    </table>
  )
}
