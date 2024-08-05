import React, { useState, useEffect } from 'react'

function App() {
  const[books, setBooks] = useState([]);

  
  async function getData() {

    const rs = await fetch('books.json');
    const jsonRs = await rs.json();
    setBooks(jsonRs);
  }

  useEffect(()=>{
   getData();

  },[]);

  return (
    <>
      <nav></nav>
      <section role='hero'>

      </section>
      <main>
        <ul className='book_list'>
          {
            books.slice(0,10).map((book,index)=>

            <li className='book_item'>
              <figure>
                <img src={book.imageLink} alt="" />
              </figure>
              <div className='book_details'>
                <h3>{book?.title}</h3>
                <h4><span className='details_title'>By:</span>{book?.author}</h4>
                <div>
                  <h5>
                    <span className='details_title'>paginas:</span>
                    {book?.pages}
                  </h5>
                  <h5>
                    <span className='details_title'>Año:</span>
                    {book.year}
                  </h5>
                  
                  
                </div>
              </div>
            </li>

            )            
          }
            
          </ul>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
