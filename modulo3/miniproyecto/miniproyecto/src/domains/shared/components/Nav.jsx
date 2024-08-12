import React from 'react'

export function Nav({toggleModal, locationGeneralFilter}) {
  return (
    <nav>
        <div className='panel-busqueda'>
            <div>{locationGeneralFilter}</div>
            <div className='buscador'>
            <input type="text" placeholder='Add guests' readOnly/>
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
