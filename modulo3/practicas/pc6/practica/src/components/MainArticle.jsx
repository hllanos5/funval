import React from 'react'

export function MainArticule() {
  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width:640px)" srcSet={'./images/image-web-3-mobile.jpg'}></source>
        <source media="(min-width:641px)" srcSet={'./images/image-web-3-desktop.jpg'}></source>
        <img src={'./images/image-web-3-desktop.jpg'} alt="Articulo Principal Imagen" />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] font-bold sm:text-[58] leading-none'>The Bright Future of Web 3.0</h2>
        </div>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>Read More</button>
        </div>
      </div>
      
    </section>
  )
}
