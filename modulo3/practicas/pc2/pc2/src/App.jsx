import { useState } from 'react'

function App() {

  return (
    <>
      <div className='cabecera'>
        <h1 className='titulo-1'>Reliable, efficient delivery</h1>
        <h1 className='titulo-2'>Powered by Technology</h1>
        <div className='sub-titulo'>Our Artifical Intelligence powered tools use millions of project data</div>
        <div className='sub-titulo'>points to ensure that your project is successful</div>
      </div>
      <div className='cuerpo'>
        <div className='caja border-superior-verde'>
          <h1>Supervisor</h1>
          <div className='contenido'>Monitors activity to identify project</div>
          <div className='contenido'>roadbloacks</div>
          <img src="./images/lupa.png" alt="" />
        </div>

        <div className='contenido-medio'>
          <div className='caja border-superior-rojo'>
            <h1>Supervisor</h1>
            <div className='contenido'>Monitors activity to identify project</div>
            <div className='contenido'>roadbloacks</div>
            <img src="./images/casa.png" alt="" />
          </div>
          <div className='caja border-superior-amarillo'>
            <h1>Supervisor</h1>
            <div className='contenido'>Monitors activity to identify project</div>
            <div className='contenido'>roadbloacks</div>
            <img src="./images/bombilla.png" alt="" />
          </div>
        </div>

        <div className='caja border-superior-azul'>
          <h1>Supervisor</h1>
          <div className='contenido'>Monitors activity to identify project</div>
          <div className='contenido'>roadbloacks</div>
          <img src="./images/pantalla.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default App
