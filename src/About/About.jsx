import './About.css';
import { FaMapMarkerAlt } from "react-icons/fa";


function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="about-row">
            <div className="left-content">
              <h1>David Higgins</h1>
              <h2>Junior Software Engineer</h2>
              <p>I’m a passionate software developer with a strong foundation in computer science and a focus on building efficient, scalable, and user-friendly applications. I enjoy solving complex problems through clean code and thoughtful design, whether working on the frontend, backend, or full-stack systems. With experience across a range of technologies and languages, I continuously seek to...</p>
              <p>I’m a passionate software developer with a strong foundation in computer science and a focus on building efficient, scalable, and user-friendly applications. I enjoy solving complex problems through clean code and thoughtful design, whether working on the frontend, backend, or full-stack systems. With experience across a range of technologies and languages, I continuously seek to...</p>
              <p>I’m a passionate software developer with a strong foundation in computer science and a focus on building efficient, scalable, and user-friendly applications. I enjoy solving complex problems through clean code and thoughtful design, whether working on the frontend, backend, or full-stack systems. With experience across a range of technologies and languages, I continuously seek to...</p>
            </div>
            <div className="right-content">
              <div className="photo-container">
                <img src="src/assets/images/graduation.jpg" alt="David Higgins" />
                <div className="photo-overlay">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>McEwan Hall, Graduation</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="lower-content">
            <div className="experience-container">
                <div className="experience-item">
                    <div className="experience-left">
                        <img className="company-logo" src="src/assets/images/RedgateLogo.png" alt="Redgate Logo" />
                        <h2>Redgate</h2>
                    </div>
                    <div className="experience-right">
                        <span className="experience-date">Aug 2025 - Present</span>
                        <span className="experience-position">Software Engineer</span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-left">
                        <img className="company-logo" src="src/assets/images/LanthanideasLogo.png" alt="Redgate Logo" />
                        <h2>Lanthanideas</h2>
                    </div>
                    <div className="experience-right">
                        <span className="experience-date">2023 - 2024</span>
                        <span className="experience-position">Web Developer</span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-left">
                        <img className="company-logo" src="src/assets/images/RedgateLogo.png" alt="Redgate Logo" />
                        <h2>Redgate</h2>
                    </div>
                    <div className="experience-right">
                        <span className="experience-date">July - September 2024</span>
                        <span className="experience-position">Software Engineer Intern</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;