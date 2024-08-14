import { useState } from 'react'
import { Header } from './components/Header'
import { MainArticule } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'
import { ArticleContainer } from './components/ArticleContainer'

function App() {

  return (
    <main className='px-4 pt-6'>
      <Header/>
      <div className='lg:flex lg:gap-8'>
        <MainArticule/>
        <NewContainer/>
      </div>
      <ArticleContainer/>
      
    </main>
  )
}

export default App
