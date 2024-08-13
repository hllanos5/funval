import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-sky-600 size-96 flex flex-col justify-center items-center grap-8 '>
      
      <button className='hover:bg-slate-400 hover:text-blue-700 hover:w-80 active:bg-slate-700'>
        Hola Mundo
      </button>
      <input type="text" name="" id="" className='focus:bg-blue-600/10 focus:ring-2 ring-red-500'/>
    </div>
  )
}

export default App
