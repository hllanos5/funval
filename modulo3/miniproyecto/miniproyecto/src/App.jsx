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
              <input type="text" value="Helsinki, Finland" disabled/>
            </div>
            <ul>
              <li>
                <span className="material-symbols-outlined">
                  location_on
                </span>
                Helsinki, Finland
              </li>
              <li>
                <span className="material-symbols-outlined">
                  location_on
                </span>
                Helsinki, Finland
              </li>
              <li>
                <span className="material-symbols-outlined">
                  location_on
                </span>
                Helsinki, Finland
              </li>
              <li>
                <span className="material-symbols-outlined">
                  location_on
                </span>
                Helsinki, Finland
              </li>
            </ul>
          </div>
          <div className='guest'>
            <div className='input-guest'>
              <span>GUESTS</span>
              <input type="text" placeholder='Add guests' disabled/>
            </div>
            <div className='panel-guest-details'>
              <div className='detail'>
                <span>Adults</span>
                <label>Ages 13 or Above</label>
                <div className='panel-botones'>
                  <div className='signo'>-</div>
                  <div className='contador'>0</div>
                  <div className='signo'>+</div>
                </div>
              </div>
              <div className='detail'>
                <span>Children</span>
                <label>Ages 2 - 12</label>
                <div className='panel-botones'>
                  <div className='signo'>-</div>
                  <div className='contador'>0</div>
                  <div className='signo'>+</div>
                </div>
              </div>
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
