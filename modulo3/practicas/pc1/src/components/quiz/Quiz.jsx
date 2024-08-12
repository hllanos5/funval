export function Quiz({datos}) {
  
  return (
    <>
    <ul>
      <List datos={datos}/>
    </ul>
    </>
  )
}

function List({datos}) {
  const listItems = datos.map(dato =>
    <li key={dato.id}>
      <Image
        nombre={dato.imagen}
      />
      <span> {dato.texto}</span>
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Image({nombre} ) {
  return (
    <img
      src={nombre}
    />
  );
}