import React from 'react'
import { NavBar } from './NavBar'


export function Header() {
  return (
    <header className='flex place-content-between items-center mb-8'>       
        <img src="./images/logo.svg" alt="Logo" />
        <NavBar/>
    </header>
  )
}
