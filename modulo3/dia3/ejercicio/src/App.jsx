import { useState } from 'react'
import { Contenido } from './components/Contenido'
import { Modal } from './components/Modal'

function App() {

  const [contacts, setContacts]   = useState([{id:1,nombre:"Juan Perez", correo: "juan@example.com", numero:"123-456-7890", clasePadre:"contact", claseNombre:"name", claseDetalle: "details"}]);
  const [isVisible, setIsVisible] = useState(false);

  function toggleModal(){
    setIsVisible(!isVisible);
  }

  return (
    <>    
      <Contenido toggleModal={toggleModal} aContacto={contacts} />
      {isVisible &&
        <Modal toggleModal={toggleModal}/>
      }
      
    </>
  )
}

export default App
