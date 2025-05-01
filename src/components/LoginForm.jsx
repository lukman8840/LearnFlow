import React, { useState } from 'react'
import '../styles/Auth.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('logging in with:', formData)
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

export default LoginForm
