import { useState } from 'react'
import { Header } from './components/Header'
import { MainArticule } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'

function App() {

  return (
    <main className='px-4 pt-6'>
      <Header/>
      <div className='sm:flex sm:gap-8'>
        <MainArticule/>
        <NewContainer/>
      </div>
      
    </main>
  )
}

export default App
