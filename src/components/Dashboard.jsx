import React, { useContext } from 'react'
import courseImage from '../assets/L_M_N.webp'
import '../styles/Dashboard.css'
import { UserContext } from './UserContext'

const Dashboard = () => {
  const {userData} = useContext(UserContext);

  if (!userData) return <p>No user Data. please sign up</p>
  return (
    <div className='dashboard-container'>
        <div className="user-info">
            <h2>Welcome: {userData.name}</h2>
            <p> <strong>Your Course:</strong>{userData.course.title}</p>
            <p> <strong>Course Description:</strong>{userData.course.description}</p>
            <p>Enrolled on: {userData.enrolledAt}</p>
            <p>Course Duration: 4 Weeks</p>
            <p>Progress: 0% Completed</p>
            <p>Status:<italic>Not Started</italic> </p>
        </div>
        <div className="course-info">
            <img src={userData.course.image} alt="course-image" />
            <p>course modules: Number of Modules</p>
            <button>Start Course</button>
        </div>
      
    </div>
  )
}

export default Dashboard
