import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const codeLines = [
    'import React from "react";',
    'const App = () => {',
    '  return (',
    '    <div>Hello, World!</div>',
    '  );',
    '};',
    'export default App;',
  ]

  const highlightCode = (line) => {
    const keywords = ['import', 'from', 'const', 'return', 'export', 'default']
    const jsxTags = ['<div>', '</div>']

    return line.split(/(\s+|;|{|}|\(|\))/).map((token, index) => {
      if (keywords.includes(token)) {
        return (
          <span key={index} style={{ color: '#569CD6' }}>{token}</span>
        )
      } else if (jsxTags.includes(token)) {
        return (
          <span key={index} style={{ color: '#DCDCAA' }}>{token}</span>
        )
      } else if (token.startsWith('"') && token.endsWith('"')) {
        return (
          <span key={index} style={{ color: '#CE9178' }}>{token}</span>
        )
      }
      return token
    })
  }

  return (
    <>
      <div className="page">
        <div className="terminal">
          <div className="taskbar"></div>
          <div className="code-container">
            {codeLines.map((line, index) => (
              <div key={index} className="code-line">
                <span className="line-number">{index + 1}</span>
                <span className="code-text">{highlightCode(line)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
