import { useEffect, useState } from 'react';
import CodeSnippet from './CodeSnippet'

function Terminal() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Delay to trigger the pop-up animation after mount
    const timer = setTimeout(() => setShowTerminal(true), 500); // 100ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`terminal${showTerminal ? " pop-in" : ""}`}>
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
    </>
  )
}

export default Terminal; 