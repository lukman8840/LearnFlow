import React, { useState } from 'react'
import '../styles/Navbar.css'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className='nav-container'>
      <div className="left-section">
        <div className="logo">
           <h1>LearnFlow</h1>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>

            <div className='dropdown'
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className='dropdown-toggle'>Courses ▾</span>
              {showDropdown && (
                <div className='dropdown-menu'>
                  <Link to="/courses/gmail">Gmail Basics</Link>
                  <Link to="/courses/gmail">Google Docs</Link>
                  <Link to="/courses/gmail">Internet Research</Link>
                  <Link to="/courses/gmail">Intro to AI Tools</Link>
                  <Link to="/courses/gmail">File Storage</Link>
                  <Link to="/courses/gmail">Online Safety</Link>
                </div>
              )}
            </div>
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
