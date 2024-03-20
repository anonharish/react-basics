import React from 'react'
import logo from "../src/assets/fooddelivery.png"

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <img src={logo} className='logo-img'/>
        <div>
          <ul className='nav-container'>
            <li className='nav-item'>
              Home
            </li>
            <li className='nav-item'>
              About
            </li>
            <li className='nav-item'>
              Cart
            </li>
            <li className='nav-item'>
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;