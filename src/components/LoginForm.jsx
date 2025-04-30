import React, { useState } from 'react'

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
    </div>
  )
}

export default LoginForm
