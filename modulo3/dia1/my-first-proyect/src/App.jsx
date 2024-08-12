function App() {

  return (
    <>
      <nav className="main-nav">
          <figure className="company-logo">
            <img src="/img/logo-2.svg" alt="Logo de la empresa" />
          </figure>
          <ul className="nav-option">
            <li href="#" className="nav-item">Home</li>
            <li href="#" className="nav-item">Service</li>
            <li href="#" className="nav-item">Contact</li>
            <li href="#" className="nav-item">About</li>
          </ul>
      </nav>
      <main>
        <ul className="product-list">
          <li>
            <figure>
              <img src="https://picsum.photos/200/300?random=1"/>
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://picsum.photos/200/300?random=2"/>
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://picsum.photos/200/300?random=3"/>
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://picsum.photos/200/300?random=4"/>
            </figure>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
