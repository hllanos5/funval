import React from 'react'
import { Input } from './shared/Input'
import { Button } from './shared/Button'

export function PanelIzquierda({oInput1, oInput2, aBotones, values, handleInput}) {
  return (
    <>
        <div className="data-wrapper">
          <h1>Bill</h1>
          <Input input={oInput1} valor={values.bill} handleInput={handleInput}/>
          <h2>Select Tip %</h2>
          <ul>
            <Button aButton={aBotones} valor= {values.tip} handleInput={handleInput}/>
            <li>
              <input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" onChange={handleInput}/>
            </li>
          </ul>
          <h2>Number of People</h2>
          <Input input={oInput2} valor={values.people} handleInput={handleInput}/>
        </div>
    </>
  )
}
