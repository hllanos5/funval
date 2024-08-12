import React, { useEffect, useState } from 'react'

export default function Nav({ data, setUsers }) {

    const [searchValues, setSearchValues] = useState({
        nombre: ''
    })

    const handleClick = (e) => {
        const { nombre } = searchValues;
        if (nombre.trim() !== '') {
            const rs = data.filter(user => user.name.toLowerCase().includes(nombre.toLowerCase()))
            setUsers(rs)
            return;
        }
        setUsers(data)

    }

    const handleChange = (e) => {
        const target = e.target
        setSearchValues({ ...searchValues, [target.name]: target.value })
    }

    return (
        <nav>
            <div className='panel-busqueda'>
                <div className='buscador'>
                    <input type="text" placeholder='Buscar' name='nombre' onChange={handleChange}/>
                </div>
                <div className='buscar' onClick={handleClick}>
                    <span className="material-symbols-outlined">
                    search
                    </span>
                </div>
            </div>
        </nav>
    )
}
