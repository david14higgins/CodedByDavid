import './About.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Element } from "react-scroll";
import graduationImg from '../assets/images/graduation.jpg'
import redgateLogo from '../assets/images/RedgateLogo.png';
import lanthanideasLogo from '../assets/images/LanthanideasLogo.png';


function About() {
  return (
    <Element name="about-page">
      <div className="about">
        <div className="about-content">
          <div className="about-row">
            <div className="left-content">
              <h1>David Higgins</h1>
              <h2>Junior Software Engineer</h2>
              <p>I'm a software engineer with a strong academic foundation and a passion for building things end-to-end. Studying Computer Science at the University of Edinburgh has shaped how I approach problems: with clarity, structure, and a focus on creating relaible, well-designed systems. I enjoy turning ideas into working solutions that are both intuitive and technically sound.</p>
              <p>Much of my experience comes from hands-on projects across web development, cloud archicture, and full-stack engineering. This portfolio covers some of the projects I've undertaken outside of both my studies and professional work. These projects have strengthened my understanding of core software principles while giving me confidence in shipping real, user-facing applications.</p>
              <p>I am currently working at Redgate Software in Cambridge where I'm learning more about the world of Database DevOps. </p>
            </div>
            <div className="right-content">
              <div className="photo-container">
                <img src={graduationImg} alt="David Higgins" />
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
                        <img className="company-logo" src={redgateLogo} alt="Redgate Logo" />
                        <h2>Redgate</h2>
                    </div>
                    <div className="experience-right">
                        <span className="experience-date">Aug 2025 - Present</span>
                        <span className="experience-position">Software Engineer</span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-left">
                        <img className="company-logo" src={lanthanideasLogo} alt="Lanthanideas Logo" />
                        <h2>Lanthanideas</h2>
                    </div>
                    <div className="experience-right">
                        <span className="experience-date">2023 - 2024</span>
                        <span className="experience-position">Web Developer</span>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-left">
                        <img className="company-logo" src={redgateLogo} alt="Redgate Logo" />
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
    </Element>
  )
}

export default About;