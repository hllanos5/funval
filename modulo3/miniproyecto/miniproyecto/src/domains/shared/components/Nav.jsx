import React from 'react'

export function Nav() {
  return (
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
  )
}
