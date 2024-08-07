import React, { useState, useEffect } from 'react'


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
      <nav>
        <div className='panel-busqueda'>
          <div>Helsinki, Findland</div>
          <div className='buscador'>
            <input type="text" placeholder='Add guests'/>
          </div>
          <div className='buscar'>
          <span className="material-symbols-outlined">
            search
          </span>
          </div>
        </div>
      </nav>
      <div className='panel-titulo'>
        <div className='titulo'>
          <h2>Stay in Filand</h2>
        </div>
        <div className='contador'>
          12+ stays
        </div>
      </div>
      <div className='contenido'>
        <ul className="card">
          {
            data.slice(0,6).map((obj,index) =>
              <li key={index}>
                <figure>
                  <img src={obj.photo}/>
                </figure>
                <div className='linea-1'>
                  {obj.superHost === true && 
                    <div className='super-host'>SUPER HOST</div>
                  }
                  <div className='description'>
                    {obj.type} 
                    {obj.beds!== null && <span>. {obj.beds} beds</span>}
                  </div>
                  <div className='clasificacion'>
                    <span className="material-symbols-outlined">
                    star
                    </span>{obj.rating}
                  </div>
                </div>
                <div className='linea-2'>
                  <h2>
                    {obj.title}
                  </h2>
                </div>
              </li>
            )
          }
            
        </ul>

      </div>
    </>
  )
}

export default App
