import React, { useState } from 'react'
import '../styles/Navbar.css'
import { FaSignInAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)


  const toggelMenu = () => {
    setShowMenu(prev => !prev);
  }

  return (
    <div className='nav-container'>
      <div className="left-section">
        <div className="logo">

           <h1 onClick={() => navigate('./')}>LearnFlow</h1>
          
        </div>
        <div className={`nav-links ${showMenu ? 'show' : ''}`}>
            <Link to="/">Home</Link>

            <div className='dropdown'
              onClick={() => setShowDropdown(prev => !prev)}
            >
              <span className='dropdown-toggle'>Courses ▾</span>
              {showDropdown && (
                <div className='dropdown-menu'>
                  <Link to="/courses/gmail">Gmail Basics</Link>
                  <Link to="/courses/google-docs">Google Docs</Link>
                  <Link to="/courses/internet-research">Internet Research</Link>
                  <Link to="/courses/intro-to-ai">Intro to AI Tools</Link>
                  <Link to="/courses/file-storage">File Storage</Link>
                  <Link to="/courses/online-safety">Online Safety</Link>
                </div>
              )}
            </div>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="right-section">
        <button className="login" onClick={() => navigate('./login')}>
          <span className='login-text'>Login</span>
          <FaSignInAlt style={{marginLeft: '18px'}}/>
        </button>
        <button className="menu-toggle" onClick={toggelMenu}>
          {showMenu ? 'X' : '☰'}
        </button>

      </div>
    </div>
  )
}

export default Navbar;
