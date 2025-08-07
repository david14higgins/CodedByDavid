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
      
    </>
  )
}

export default App
