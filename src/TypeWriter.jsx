import  { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed = 50, onDone, delay=0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const doneCalled = useRef(false);

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    setDisplayText('');           // <-- Reset text
    doneCalled.current = false;   // <-- Reset done flag

    const startTyping = () => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          if (onDone && !doneCalled.current) {
            doneCalled.current = true;
            onDone();
          }
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearInterval(delayTimeout);
    };
  }, [text, speed, onDone, delay]);

  return { displayText, isTyping };
};

const Typewriter = ({ text, speed, onDone, keepBlinking = false, delay = 0}) => {
  const { displayText, isTyping } = useTypewriter(text, speed, onDone, delay);

  const showCursor = keepBlinking || isTyping;

  return (
    <span style={{ position: "relative" }}>
      {displayText}
      {showCursor && (
      <span
        style={{
          display: "inline-block",
          width: "4px",
          height: "1.2em",
          background: "#fff",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s steps(1) infinite"
        }}
      >
        {isTyping ? '\u00A0' : ''}
      </span>
      )}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </span>
  );
};

export default Typewriter;