import React, { useState, useEffect } from 'react'
import { List } from './domains/department/page/List';
import { Nav } from './domains/shared/components/Nav';

function App() {

  const[data, setData] = useState([]);
  
  async function getData() {

    const data = await fetch('stays.json');
    const jsonData = await data.json();
    setData(jsonData);
  }

  useEffect(()=>{
   getData();

  },[]);

  return (
    <>
      <div className='contenedor-principal'>
        <Nav />
        <List data={data}/>
      </div>
      <div className='panel-busqueda-modal'>
        <div className='panel-busqueda-modal'>
          <div className='location'>
            <div className='input-location'>
              <span>LOCATION</span>
              <input type="text" value="Helsinki, Finland" disabled="true"/>
            </div>
          </div>
          <div className='guest'>
            <div className='input-guest'>
              <span>GUESTS</span>
              <input type="text" placeholder='Add guests' disabled="true"/>
            </div>
          </div>
          <div className='panel-buscar'>
            <button>
              <span className="material-symbols-outlined">
              search
              </span>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
