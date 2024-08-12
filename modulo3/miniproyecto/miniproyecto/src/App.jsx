import React, { useState, useEffect } from 'react'
import { List } from './domains/department/page/List';
import { Nav } from './domains/shared/components/Nav';

function App() {

  const[data, setData] = useState([]);
  
  async function getData() {

    const data = await fetch('stays.json');
    const jsonData = await data.json();
    setData(jsonData);
  }

  useEffect(()=>{
   getData();

  },[]);

  return (
    <>
      <Nav/>
      <List data={data}/>
    </>
  )
}

export default App
