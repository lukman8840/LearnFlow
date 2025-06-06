import React, { useContext } from 'react'
import { FaCamera } from 'react-icons/fa'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom';
import '../styles/UsersPage.css'

const UsersPage = () => {
  const {userData } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className='users-dashboard'>
      <div className="users-info">
        <div className="profile-pic-section">
          <div className="profile-pic-wrapper">
            <img 
              src={userData.profilePic} 
              alt="profile"
              className='profile-pic' 
            />
            <label className='upload-con'>
                <FaCamera />
                <input type='file' style={{display: 'none'}}/>
            </label>
            
          </div>
           <h2>Welcome, {userData.name}</h2>
        </div>
          <p><strong>Email: {userData.email}</strong></p>
          <p><strong>Course: {userData.course.title}</strong></p>
          <p><strong>Duration: {userData.duration}</strong></p>
          <p><strong>Status: <em>Not Started</em></strong></p>

          <div className="action-buttons">
            <button onClick={() => navigate('./edit-profile')}>Edit Profile</button>
          </div>
      </div>
      <div className="course-info">
        <div className="course-content">
          <h2>Course Modules</h2>
          <button className='completed'>Completed</button>
        </div>
        <ul>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <li>list of modules of the course</li>
          <button onClick={() => navigate('./start-course')}>Start Course</button>
        </ul>
      </div>
    </div>
  )
}

export default UsersPage
