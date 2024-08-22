import { useState } from 'react'
import { Prueba } from './components/Prueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Prueba/>
    </>
  )
}

export default App
