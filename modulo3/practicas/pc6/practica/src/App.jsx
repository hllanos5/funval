import { useState } from 'react'
import { Header } from './components/Header'
import { MainArticule } from './components/MainArticle'

function App() {

  return (
    <main className='px-4 pt-6'>
      <Header/>
      <MainArticule/>
    </main>
  )
}

export default App
