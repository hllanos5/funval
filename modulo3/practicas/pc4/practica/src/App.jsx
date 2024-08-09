import React, { useEffect, useState } from 'react'
import { UserCard } from './components/UserCard';
import Nav from './components/Nav';

function App() {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

    async function getData() {
        let rs = await fetch('https://jsonplaceholder.typicode.com/users');
        const rsJson = await rs.json();
        setUsers(rsJson);
        setData(rsJson);
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <div className='contenedor'>
      <Nav data={data} setUsers={setUsers}/>
      <div className='panel-usuarios'>
        {
          users.map(user => (
            <UserCard key={user.id} data= {user}/>
          ))        
        }
      </div>
    </div>
  )
}

export default App
