
export function InputModal({dato}) {
  return (
    <>
        <label htmlFor={dato.idElemento}>{dato.texto}</label>
        <input type="text" id={dato.idElemento} name={dato.nombe} required/>
    </>
  )
}
