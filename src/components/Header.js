import React from 'react'
import Logo from '../assets/images/Logo.png'

function Header() {
  return (
    <div className='header'>
      <div className='forlogo'>
        <img src={Logo} alt='' classname='logo' ></img>
      </div>
      <div className='headingtext'>
        <h1 className='headtext'>
          CosMic <span className='lightheader'>Tech Int'l</span>
        </h1>
      </div>
    </div>
  )
}

export default Header
