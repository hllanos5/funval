import React from 'react'

export function MainArticule() {
  return (
    <section>
      <picture>
        <source media="(max-width:640px)" srcSet={'./images/image-web-3-desktop.jpg'}></source>
        <source media="(min-width:641px)" srcSet={'./images/image-web-3-mobile.jpg'}></source>
        <img src={'./images/image-web-3-mobile.jpg'} alt="Articulo Principal Imagen" />
      </picture>
      <h2>The Bright Future of Web 3.0</h2>
      <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
      <button>Read More</button>
    </section>
  )
}
