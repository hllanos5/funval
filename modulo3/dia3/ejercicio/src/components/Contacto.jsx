export function Contacto({dato}) {
  return (
    <li className={dato.clasePadre}>
        <span className={dato.claseNombre}>{dato.nombre}</span>
        <span className={dato.claseDetalle}>{dato.correo} - {dato.numero} </span>
    </li>
  )
}
