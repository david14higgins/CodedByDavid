import { useState } from 'react'
import CodeSnippet from './codesnippet'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  

  return (
    <>
      <div className="home">
        <div className="terminal-container">
          <div className="terminal">
            <div className="taskbar">
              <div className="taskbar-buttons">
                <span className="button red-button"></span>
                <span className="button yellow-button"></span>
                <span className="button green-button"></span>
              </div>
            </div>
            <div className="code-container">
              < CodeSnippet />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-content">
          <div className="left-content">
            <h1>David Higgins</h1>
            <h2>Junior Software Engineer</h2>
            <p>I’m a passionate software developer with a strong foundation in computer science and a focus on building efficient, scalable, and user-friendly applications. I enjoy solving complex problems through clean code and thoughtful design, whether working on the frontend, backend, or full-stack systems. With experience across a range of technologies and languages, I continuously seek to learn and adapt in a fast-paced, ever-evolving industry. I'm driven by curiosity, collaboration, and the desire to create impactful digital solutions.</p>
          </div>
          <div className="right-content">
            <div className="photo-container">
              <img src="src/assets/images/graduation.jpg" alt="David Higgins" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
