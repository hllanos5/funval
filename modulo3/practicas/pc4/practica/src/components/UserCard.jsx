import React from 'react'

export  function UserCard({data}) {
  const urlImg = "https://picsum.photos/200/300?random="+data.id;
    
  return (
    <div className='card'>
        <figure>
            <img src={urlImg} alt="" />
        </figure>
        <div className='card-detail'>
            <h1>{data.name}</h1>
            <div className='nombre'>{data.username}</div>
            <div className='usuario'>{data.email}</div>
        </div>
    </div>
  )
}
