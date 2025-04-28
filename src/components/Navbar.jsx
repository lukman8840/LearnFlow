import React from 'react'
import '../styles/Navbar.css'

import { FaSignInAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="left-section">
        <div className="logo">
           <h1>LearnFlow</h1>
        </div>
        <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#About">About</a>
            <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="right-section">
        <button className="login">
          <span className='login-text'>Login</span>
          <FaSignInAlt style={{marginLeft: '18px'}}/>
        </button>
      </div>
    </div>
  )
}

export default Navbar;
