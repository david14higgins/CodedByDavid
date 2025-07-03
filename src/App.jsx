import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CodeSnippet from './codesnippet' 


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
