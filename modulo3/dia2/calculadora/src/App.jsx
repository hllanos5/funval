import React, { useState } from 'react'
import { Input } from './components/Input'
import { ButtonsPanel } from './components/ButtonsPanel'
//rfc
export default function App() {

  const[display, setDisplay] = useState('');

  return (
    <div className="calculator">
        <Input value={display}/>
        <ButtonsPanel display={display} setDisplay={setDisplay}/>
    </div>
  )
}