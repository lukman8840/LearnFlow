import '../styles/LearnMore.css'

const LearnMore = () => {
  return (
    <div className="learn-content">
      {/* <button className="close-btn">X</button> */}
        <h2>About LearnFlow</h2>
            <p className='learnFlow'>LearnFlow is an AI-powered learning platform that helps you develop the skills you need to succeed in the modern workforce. We provide personalized, career-focused courses tailored to your needs.</p>
                <h3 className='features'>How LearnFlow Works</h3>
                <p className='paragraph'>Learn at your own pace with AI-powered personalized lessons. Here's how it works:</p>
                <ol>
                    <li><strong>Choose a Skill:</strong> Pick from our wide range of career-focused courses.</li>
                    <li><strong>Learn in Micro Sessions:</strong> Access short, personalized lessons anytime, anywhere.</li>
                    <li><strong>Apply Your Skills:</strong> Use your new skills to grow your career and open new opportunities.</li>
                </ol>
           <h3 className='features'>Key Features</h3>
            <ul>
                <li>🎯 Personalized Learning Paths</li>
                <li>📚 Career-Relevant Courses</li>
                <li>⚡ Fast, Micro-Learning Sessions</li>
                <li>🌍 Accessible Anywhere, Anytime</li>
            </ul>
        </div>
  )
}

export default LearnMore
