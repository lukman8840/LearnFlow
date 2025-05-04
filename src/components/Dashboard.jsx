import React from 'react'
import courseImage from '../assets/L_M_N.webp'
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <div className="user-info">
            <h2>Welcome: User Name</h2>
            <p> <strong>Your Course:</strong> Chosen Course by the Learner</p>
            <p> <strong>Course Description:</strong> Description of the Chosen Course</p>
            <p>Enrolled on: April 28, 2025</p>
            <p>Course Duration: 4 Weeks</p>
            <p>Progress: 0% Completed</p>
            <p>Status: Not Started</p>
        </div>
        <div className="course-info">
            <img src={courseImage} alt="course-image" />
            <p>course modules: Number of Modules</p>
            <button>Start Course</button>
        </div>
      
    </div>
  )
}

export default Dashboard
