import React, { useContext, useState } from 'react'
import '../styles/Auth.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import GmailImage from '../assets/Gmail_basics.png';
import GoogleImage from '../assets/Google_docs.jpeg'
import InternetImage from '../assets/internet_research.jpeg';
import AIImage from '../assets/AI-Tools.jpeg';
import GoogleDriveImage from '../assets/file_storage.png';
import OnlineImage from '../assets/Online_safety.png'



const SignUpForm = () => {
    const navigate = useNavigate()

    const {setUserData} = useContext(UserContext)
    const [name, setName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    const courses = [
        {
            title: "Gmail Basics",
            description: "Master how to send emails, manage inboxes, and use attachments professionally.",
            image: `${GmailImage}`
        },
        {
            title: "Google Docs Mastery",
            description: "Learn to create, edit, and collaborate on documents like a pro",
            image: `${GoogleImage}`
        },
        {
            title: "Internet Research skills",
            description: "Develop smart strategies for finding reliable information online quickly.",
            image: `${InternetImage}`
        },
        {
            title: "Introduction To AI Tools",
            description: "Discover how AI like ChatGPT can boost your learning and productivity.",
            image: `${AIImage}`
        },
        {
            title: "Google Drive and File Storage",
            description: "earn how to organize, store, and access files anywhere, safely.",
            image: `${GoogleDriveImage}`
        },
        {
            title: "Online Safety and Security",
            description: "Protect your accounts and stay safe while navigating the internet.",
            image: `${OnlineImage}`
        }

    ]
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
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
    
        const courseDetails = courses.find(c => c.title === formData.course);
        setUserData({
          name: formData.name,
          course: courseDetails,
          enrolledAt: new Date().toLocaleDateString()
        });
    
        console.log('Signing up with:', formData);
        navigate('/dashboard');
      };

      
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
            <option value="Gmail Basics">Gmail Basics</option>
            <option value="Google Docs Mastery">Google Docs</option>
            <option value="Introduction To AI Tools">AI Tools</option>
            <option value="Google Drive and File Storage">Google Drive and File Storage</option>
            <option value="Internet Research skills">Internet Research Skill</option>
            <option value="Online Safety and Security">Online Safety and Security</option>

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
