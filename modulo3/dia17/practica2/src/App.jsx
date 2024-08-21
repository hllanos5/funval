
import { useImage } from './hooks/useImage'
import { useEffect, useState } from 'react'

function App() {
  const {data} = useImage();
  

  return (
    <main className='grid grid-cols-4 gap-4 p-5'>
      {data &&
       data.map(obj => 
        <div key={obj}>
          <img 
            src={obj.image}
            alt={obj.name}
          />
        </div>
       )
      }
    </main>
  )
}

export default App