export const NavBar= ()=> {
    const navOptions = [
      { id: 1, link: '', label: 'Home'},
      { id: 2, link: '', label: 'About'},
      { id: 3, link: '', label: 'Docs'}
    ]
    
    return (
      <nav>
          <figure>
            <img src="" alt="" />
          </figure>
  
          <ul>
            <li>
                <input type="search" />
                <button>
                  Search
                </button>
             </li>
            {
              navOptions.map(opt=>
                <li key={opt.id}>
                  <a href={opt.link}>{opt.label}</a>
                </li>
              )
            }
            
          </ul>
        </nav>
    )
  }