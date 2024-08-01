export function Card({dato}) {
  return (
    <div className={dato.clasePadre}>
        <h1>{dato.titulo}</h1>
        <div className={dato.claseContenido}>{dato.subtitulo1}</div>
        <div className={dato.claseContenido}>{dato.subtitulo2}</div>
        <img src={dato.imagen} alt="" />
    </div>
  )
}
