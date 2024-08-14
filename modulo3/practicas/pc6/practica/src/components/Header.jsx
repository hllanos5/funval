import React from 'react'
import { NavBar } from './NavBar'


export function Header() {
  return (
    <header className='flex place-content-between'>       
        <img src="./images/logo.svg" alt="Logo" />
        <NavBar/>
    </header>
  )
}
