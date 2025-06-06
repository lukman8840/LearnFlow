import React, { useState } from 'react'
import '../styles/Auth.css'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()

     // State for storing email and password inputs
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

     // Function to handle form input changes and update the state
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value // Update the specific field (email or password)
        }));
    };
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();// Prevent default page reload on form submit
        console.log('logging in with:', formData) // Log submitted data for testing
        navigate('/dashboard')// Redirect user to dashboard page
        
    }

  return (
    <div className='auth-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className='auth-form'>
            <input 
                type='email' 
                name='email' 
                placeholder='Enter Your Email Address'
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input 
                type='password' 
                name='password'
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleChange} 
                required   
            />
            <button type='submit'>Login</button>
        </form>    
        <div className="authcontainer">
            <p>Forget Password? <Link to='/forget-password'>Click here</Link></p>  
            <p>Dont have an account? <Link to='/signup'>SignUp here</Link> </p>
        </div>
    </div>
  )
}

export default LoginForm // Export the component so it can be used elsewhere
