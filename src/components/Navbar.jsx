import React from 'react'
import '../styles/Navbar.css'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="left-section">
        <div className="logo">
           <h1>LearnFlow</h1>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
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
