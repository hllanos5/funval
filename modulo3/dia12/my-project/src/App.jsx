import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    const rs = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    const jsonRs = await rs.json();
    setData(jsonRs["drinks"])
  }


  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className='grid grid-cols-4 m-4 gap-4'>
      {
        data.map((obj, item)=> 
          <div className='border-2 border-slate-500 rounded flex flex-col p-6 content-center items-center'>
            <div><img src={obj.strDrinkThumb}/> </div>
            <div>{obj.strDrink}</div>
          </div>
        )
      }      
    </div>
    </>
  )
}

export default App
