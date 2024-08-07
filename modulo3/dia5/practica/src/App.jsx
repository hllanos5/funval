import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

function App() {
  const [books, setBooks] = useState([]);

  async function getData() {
    const rs = await fetch('books.json')
    const jsonRs = await rs.json();
    setBooks(jsonRs)
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <NavBar/>
      <Hero/>
      <main>
          <BookList>
            {
              books.map ((book, item) =>
               <BookItem  key={item} book={book}/>
              )
            }
          </BookList>
      </main>
      <Footer/>

    </>
  )
}

export const BookList= ({children}) => {
  return (
    <ul className='book_list'>
      {children}
    </ul>
  )
}

export const BookItem = ({ book: {imageLink,title, author, pages, year}}) => {
  return (
    <li className='book_item'>
      <figure>
        <img src={imageLink} alt={title} />
      </figure>
      <div className='book_details'>
        <h3>{title}</h3>
        <h4><span className='detail_title'>By:</span>{author}</h4>
        <div>
          <h5>
            <span className='detail_title'>paginas:</span>
            {pages}
          </h5>
          <h5>
            <span className='detail_title'>Año:</span>
            {year}
          </h5>
        </div>
      </div>
    </li>
  );
}

export default App
