import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      {/* Top Text Content */}
      <div className="hero-content">
        <h1>Unlock Your Future with AI-powered Learning</h1>
        <p>
          Learn the skills that matter today. Personalized courses designed to make you career-ready, powered by AI. <span>Learn more</span>
        </p>

        <div className="cta-buttons">
          <button className="cta-btn primary">Get Started</button>
        </div>
      </div>

      {/* Courses Grid below */}
      <p className="hero-subtext">
        Join the AI revolution and build a career that lasts. Discover the possibilities with our personalized learning approach.
      </p>

      <div className="courses-grid">
        <div className="course-card">Gmail Basics</div>
        <div className="course-card">Google Docs Mastery</div>
        <div className="course-card">Internet Research Skills</div>
        <div className="course-card">Introduction to AI Tools</div>
        <div className="course-card">Google Drive & File Storage</div>
        <div className="course-card">Online Safety & Security</div>
      </div>
    </div>
  );
};

export default HeroSection;
