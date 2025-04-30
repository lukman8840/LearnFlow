import React, { useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log('Signing up with:', formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword){
            alert('Passwords do not match!')
            return;
        }
    }
  return (
    <div className='auth-container'>
        <h2>Sign Up</h2>
    <form onSubmit={handleSubmit} className='auth-form'>
        <input 
            type='text' 
            name='name' 
            placeholder='Full Name'
            value={formData.name} 
            onChange={handleChange} 
            required  
        />
        <input 
            type='email' 
            name='email' 
            placeholder='Enter Your Email Address'
            value={formData.email}
            onChange={handleChange}
            required
        />
        <input 
            type='phone' 
            name='tel' 
            placeholder='Enter Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
            required
        />

        <select name='course'>
            <option value="">Select Course</option>
            <option value="gmail">Gmail Basics</option>
            <option value="docs">Google Docs</option>
            <option value="ai">AI Tools</option>
            <option value="research">Internet Research</option>
        </select>

        <input 
            name='password' 
            type='password' 
            placeholder='Enter Your Password'
            value={formData.password}
            onChange={handleChange}
            required
        />
        <input 
            name='confirmPassword' 
            type='password' 
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
        />

        <button type='submit'>Sign Up </button>
    </form>
      
    </div>
  )
}

export default SignUpForm
