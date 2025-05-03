import React, { useState } from 'react'
import '../styles/Auth.css'
import { Link } from 'react-router-dom';


const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        age: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword){
            alert('Passwords do not match!')
            return;
        }
        console.log('Signing up with:', formData);
    }
  return (
    <div className='auth-container'>
        <h2>Join LearnFlow</h2>
        <p className='auth-tagline'>Start your journey to digital mastery. Get access to career-ready skills, personalized just for you.</p>

    <form onSubmit={handleSubmit} className='auth-form'>
        <input 
            type='text' 
            name='name' 
            placeholder='Full Name'
            value={formData.name} 
            onChange={handleChange} 
            required  
            autoFocus
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
            type='tel' 
            name='phone' 
            placeholder='Enter Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
            required
        />

        <select 
            name='course'
            value={formData.course}
            onChange={handleChange}
            required
            >
            <option value="">Select Course</option>
            <option value="gmail">Gmail Basics</option>
            <option value="docs">Google Docs</option>
            <option value="ai">AI Tools</option>
            <option value="google-drive">Google Drive and File Storage</option>
            <option value="research">Internet Research Skill</option>
        </select>

            <select 
                name='age'
                value={formData.age}
                onChange={handleChange}
                required            
            >
                <option value="">Select Age Range</option>
                <option value="under18">Under 18</option>
                <option value="18-24">18 - 24</option>
                <option value="25-34">25 - 34</option>
                <option value="35-44">35 - 44</option>
                <option value="45plus">45 and above</option>
            </select>
        <input 
            name='password' 
            type='password' 
            placeholder='Enter Your Password'
            value={formData.password} 
            onChange={handleChange}
            required
        />
            {formData.password && (
                <small>
                    {formData.password.length < 8
                        ? 'Password too short (minimium of 8 characters)'
                        : 'Strong password'
                    }
                </small>
            )}

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
    <p className='have-an-account'>Already have an account? <Link to='/login'>Login here</Link> </p>
    </div>
  )
}

export default SignUpForm
