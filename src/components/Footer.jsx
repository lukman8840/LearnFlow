import React from 'react'
import '../styles/Footer.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="footer-brand">
                <h2>LearnFlow</h2>
                <p>Empowering youth with essential digital skills for the future.</p>
            </div>

            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>Email: lukmansaidmodibbo@gmail.com</p>
                <p>Phone: +234 70457578446</p>
                <p>Location: Abuja, Nigeria</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2025 LearnFlow. All rights reserve.</p>
            <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
