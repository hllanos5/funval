import { useState } from 'react'
import { Contenido } from './components/Contenido'
import { Modal } from './components/Modal'

function App() {

  const [contacts, setContacts] = useState([]);
  
  return (
    <>    
    <Contenido/>
    <Modal/>
    </>
  )
}

export default App
