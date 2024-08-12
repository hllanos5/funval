import React from 'react'

export function Nav({toggleModal}) {
  return (
    <nav>
        <div className='panel-busqueda'>
            <div>Helsinki, Findland</div>
            <div className='buscador'>
            <input type="text" placeholder='Add guests'/>
        </div>
        <div className='buscar' onClick={toggleModal}>
            <span className="material-symbols-outlined">
            search
            </span>
            </div>
        </div>
    </nav>
  )
}
