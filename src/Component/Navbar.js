import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

function Navbar() {
  const {theme,toogleTheme} = useContext(ThemeContext)
  return (
    <div className='header'>
    <div className='header-item'>
    <a href='/'><strong>Awesome Blog</strong></a>
    </div>
    <div className='header-item'>
    <a href='/login'>Login</a>
    <button onClick={toogleTheme}>{theme==='light'?'Theme:light':'Theme:dark'}</button>
    </div>
    
    </div>
  )
}

export default Navbar