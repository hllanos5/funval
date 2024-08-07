import { useState } from 'react'


function App() {

  return (
    <>
      <nav>
        <div className='panel-busqueda'>
          <div>Helsinki, Findland</div>
          <div className='buscador'>
            <input type="text" placeholder='Add guests'/>
          </div>
          <div className='buscar'>
          <span class="material-symbols-outlined">
            search
          </span>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default App
