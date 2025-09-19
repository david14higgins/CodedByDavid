import CodeSnippet from './CodeSnippet'

function Terminal() {
  return (
    <>
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
    </>
  )
}

export default Terminal; 