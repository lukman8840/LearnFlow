import '../styles/HeroSection.css';
import whyImage from '../assets/Hero-image.webp'
import { useNavigate } from 'react-router-dom';
import GmailImage from '../assets/Gmail_basics.png'
import GoogleDocsImage from '../assets/Google_docs.jpeg'
import AIImage from '../assets/AI-Tools.jpeg'
import InternetImage from '../assets/internet_research.jpeg'
import DriveImage from '../assets/file_storage.png' 
import OnlineImage from '../assets/Online_safety.png'

const HeroSection = () => {
  // Controls display of modal
  const navigate = useNavigate();

  // Handle "Learn More" link click
  const handleLearnMore = () => {
    navigate('./learnMore')
  }

  return (
    <div className='hero-section'>
      <div className="hero-content">
        <h1>Unlock Your Future with AI-powered Learning</h1>
        <p>
          Learn the skills that matter today. Personalized courses designed to make you career-ready, powered by AI.
           <span onClick={handleLearnMore} style={{ color:  'blue', cursor: 'pointer'}}>Learn more</span>
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary" onClick={() => navigate('./login')}>Get Started</button>
        </div>
      </div>
      <p className="hero-subtext">
        Join the AI revolution and build a career that lasts. Discover the possibilities with our personalized learning approach.
      </p>
      <p>What You will Learn</p>
        <section className="courses-grid">
          <div className="course-card">
            <img src={GmailImage} alt="Gmail-Basics" className='course-image'/>
            <h3>Gmail Basics</h3>
            <p>Master how to send emails, manage inboxes, and use attachments professionally.</p>
            <button className="enroll" onClick={() => navigate('/login')}>Enroll</button>
          </div>
          <div className="course-card">
            <img src={GoogleDocsImage} alt="Gmail-Basics" className='course-image'/>
            <h3>Google Docs Mastery</h3>
            <p>Learn to create, edit, and collaborate on documents like a pro.</p>
            <button className="enroll" onClick={() => navigate('/login')}>Enroll</button>
          </div>
          <div className="course-card">
            <img src={InternetImage} alt="Gmail-Basics" className='course-image'/>
            <h3>Internet Research Skills</h3>
            <p>Develop smart strategies for finding reliable information online quickly.</p>
            <button className="enroll" onClick={() => navigate('/login')}>Enroll</button>
          </div>
          <div className="course-card">
            <img src={AIImage} alt="Gmail-Basics" className='course-image'/>
            <h3>Introduction to AI Tools</h3>
            <p>Discover how AI like ChatGPT can boost your learning and productivity.</p>
            <button className="enroll" onClick={() => navigate('/login')}>Enroll</button>
          </div>
          <div className="course-card">
            <img src={DriveImage} alt="Gmail-Basics" className='course-image'/>
            <h3>Google Drive & File Storage</h3>
            <p>Learn how to organize, store, and access files anywhere, safely.</p>
            <button className="enroll" onClick={() => navigate('/login')}>Enroll</button>
          </div>
          <div className="course-card">
            <img src={OnlineImage} alt="Gmail-Basics" className='course-image'/>
            <h3>Online Safety & Security</h3>
            <p>Protect your accounts and stay safe while navigating the internet.</p>
            <button className="enroll" onClick={() => navigate('/login')}>Enroll</button>
          </div>
        </section>
      <section className="how-it-works">
        <div className="how-container">
          <h2>How LearnFlow Works</h2>
          <p className="how-description">
          Learn at your own pace with AI-powered personalized lessons. Just 3 simple steps to to start your learning journey!
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">📝</div>
              <h3>1. Choose a Skill</h3>
              <p className='how-p'>Pick from our wide range of career focused courses</p>
            </div>
            <div className="step-card">
              <div className="step-icon">⚡</div>
              <h3>2. Learn in Micro Sessions</h3>
              <p>Access short, personalized lessons anywhere, anytime.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">🚀</div>
              <h3>3. Apply Your Skills</h3>
              <p>Use your new skills to grow your career and opportunities.</p>
            </div>
          </div>
        </div>
      </section>
          <section className="why-choose-us">
              <div className="why-container">
                <div className="why-text">
                  <h2>Why Choose LearnFlow ?</h2>
                  <p>
                  At LearnFlow, we believe in making education simple, practical, and accessible. 
                  Our AI-powered platform adapts to your learning needs and helps you build skills that matter.
                  </p>
                  <ul className="why-list">
                    <li>🎯 Personalized Learning Paths</li>
                    <li>📚 Career-Relevant Courses</li>
                    <li>⚡ Fast, Micro-Learning Sessions</li>
                    <li>🌍 Accessible Anywhere, Anytime</li>
                  </ul>
                </div>
                <div className="why-image">
                  <img src={whyImage} alt="students learning with Technology" />
                </div>
              </div>
      </section>
    </div>
  );
};
export default HeroSection;
