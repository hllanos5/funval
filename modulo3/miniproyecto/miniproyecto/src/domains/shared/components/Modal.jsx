import React, { useEffect, useState } from 'react'

export function Modal({toggleModal, location, data, setDataFilter, setLocationGeneralFilter}) {
    
    const [locationFilter, setLocationFilter] = useState("");
    const [filterValues, setFilterValues] = useState({
        location: ''
    })

    const handlerLocationSelected = (e) => {
        let filtroLocation = (e.target.textContent).replace("location_on","")
        setLocationFilter(filtroLocation);
        setFilterValues({ ...setFilterValues, ["location"]: filtroLocation })
        
    }

    function filterData() {
        const { location } = filterValues;
        let ciudad = location.split(",")[0];
        
        if(ciudad!== ""){
            const rs = data.filter(obj => obj.city === ciudad);
            setDataFilter(rs);
            setLocationGeneralFilter(location);
            return;
        }
    }

    return (
    <>
    <div className='panel-busqueda-modal-general'>
        <div className='panel-busqueda-modal'>
            <div className='location'>
            <div className='input-location'>
                <span>LOCATION</span>
                <input type="text" value={locationFilter} disabled/>
            </div>
            <ul>
                {
                    location.map ((nombre, index)=>
                        <li key={index} onClick={handlerLocationSelected}>
                            <span className="material-symbols-outlined">
                            location_on
                            </span>
                            {nombre}
                        </li>
                    )
                }
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
            <button onClick={()=>{filterData() ,toggleModal()}}>
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
