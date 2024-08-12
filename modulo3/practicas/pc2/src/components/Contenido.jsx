import {Card} from "./Card"

export  function Contenido() {

  const oCardLateralIzquieda = {
    titulo: "Supervisor",
    subtitulo1:"Monitors activity to identify project",
    subtitulo2: "roadbloacks",
    clasePadre:"caja border-superior-verde",
    claseContenido: "contenido",
    imagen: "./images/lupa.png"
  }

  const aCardLateralMedio = [
    {
      titulo: "Team Builder",
      subtitulo1:"Scans our Talent network to create the",
      subtitulo2: "optiomal teams fou project",
      clasePadre:"caja border-superior-rojo",
      claseContenido: "contenido",
      imagen: "./images/casa.png"
    },
    {
      titulo: "Karma",
      subtitulo1:"Regularly evaluates our talent to ensure",
      subtitulo2: "quality",
      clasePadre:"caja border-superior-amarillo",
      claseContenido: "contenido",
      imagen: "./images/bombilla.png"
    }
  ]

  const oCardLateralDerecha = {
    titulo: "Calculator",
    subtitulo1:"Uses data from past projects to provide",
    subtitulo2: "better delivery estimates",
    clasePadre:"caja border-superior-azul",
    claseContenido: "contenido",
    imagen: "./images/pantalla.png"
  }

  return (
    <div className='cuerpo'>
      <Card dato = {oCardLateralIzquieda} />
      <div className='contenido-medio'>
        {
          aCardLateralMedio.map(obj => 
            <Card dato={obj}/>
          )
        }
      </div>
      <Card dato = {oCardLateralDerecha} />
      </div>
  )
}
