import React, { useState, useEffect } from 'react'

function App() {
  /*const [data, setData] = useState([]);

  async function getData() {
    const rs = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    const jsonRs = await rs.json();
    setData(jsonRs["drinks"])
  }


  useEffect(() => {
    getData()
  }, []) */
  return (
    <main className=''>
      <header className='w-full h-[60px] border-solid border-2 border-indigo-600'>Header</header>
      <div className='flex flex-wrap h-[calc(100vh-120px)] '>
        <div className='border-solid border-2 border-indigo-100  grid h-1/3 w-full md:h-1/2 lg:w-1/3 lg:h-full lg:order-2'>Main</div>
        <div className='border-solid border-2 border-indigo-200 h-1/3 w-full md:w-1/2  md:h-1/2 lg:w-1/3 lg:h-full lg:order-1' >Left</div>
        <div className='border-solid border-2 border-indigo-300 h-1/3 w-full md:w-1/2  md:h-1/2 lg:w-1/3 lg:h-full lg:order-3'>Right</div>
      </div>
        <footer className='w-full h-[60px] border-solid border-2 border-indigo-600'>Footer</footer>
    </main>
  )
}

export default App
