import { useState } from 'react'
import { useGame } from './hooks/useGame'

function App() {
const {game, handleMove, turn} = useGame();
  return (
    <>
      <div className='w-full h-screen bg-gradient-to-br from-blue-900 to-blue-600'>
      <div className='container max-w-screen-sm mx-auto  flex flex-col h-full'>
        <header className='text-white py-10 '>
          <h1 className='text-3xl font-bold text-center'>Tic-Tac-Toe</h1>
        </header>
        <main className='grid grid-cols-3 w-full place-content-center flex-grow gap-6 px-8'>
          {
            game.map(item =>
              <div key= {item} 
              className={`size-28 bg-slate-800 grid place-content-center mx-auto text-white ${!item.player && 'cursor-pointer'}`}
              onClick={()=>handleMove(item.id)}>
                {item.player === 1 && 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                  </svg>
                }
                {item.player === 2 && 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>                
                }
              </div>
            )
          }
        </main>
        <footer className='flex justify-evenly px-8 py-10 text-white font-bold text-xl'>
          <h2 className={`${turn === 1 && 'text-red-300'}`}>Player: <span>1</span></h2>
          <h2 className={`${turn === 2 && 'text-red-300'}`}>Player: <span>2</span></h2>
        </footer>
      </div>
    </div>
    </>
  )
}

export default App