import React, { useState, useEffect } from 'react'
import { List } from './domains/department/page/List';
import { Nav } from './domains/shared/components/Nav';
import { Modal } from './domains/shared/components/Modal';

function App() {

  const[data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  async function getData() {

    const data = await fetch('stays.json');
    const jsonData = await data.json();
    setData(jsonData);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
   getData();

  },[]);

  return (
    <>
      <div className='contenedor-principal'>
        <Nav toggleModal={toggleModal}/>
        <List data={data}/>
      </div>
      { isOpen &&
        <Modal toggleModal={toggleModal}/>
      }
    </>
  )
}

export default App
