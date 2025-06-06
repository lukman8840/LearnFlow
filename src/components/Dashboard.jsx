import React, { useContext } from 'react'
// import courseImage from '../assets/L_M_N.webp'
import '../styles/Dashboard.css'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    // Accessing userData from global context
    const navigate = useNavigate();
  const {userData} = useContext(UserContext);
   // If no userData is available (e.g., user hasn't signed up), show a fallback message
  if (!userData) return <p>No user Data. Please sign up</p>
  
  return (
    <>
    <div className='dashboard-container'>
        <div className="user-info">
          <h2>Welcome, {userData.name}</h2>
            <p> <strong>Your Course: </strong>{userData.course.title}</p>
            <p> <strong>Course Description: </strong>{userData.course.description}</p>
            <p>Enrolled on: {userData.enrolledAt}</p>
            <p>Course Duration: 4 Weeks</p>
            <p>Progress: 0% Completed</p>
            <p>Status: <em>Not Started</em></p>
        </div>
        <div className="course-info">
            <img src={userData.course.image} alt="course-image" />
            <p>course modules: Number of Modules</p>
            <button onClick={() => navigate('/userspage')}>Start Course</button>
        </div>
    </div>
       </>
  )
}

export default Dashboard
