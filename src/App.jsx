import { useState } from 'react'
import CodeSnippet from './codesnippet'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  

  return (
    <>
      <div className="page">
        <div className="terminal">
          <div className="taskbar"></div>
          <div className="code-container">
            < CodeSnippet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
