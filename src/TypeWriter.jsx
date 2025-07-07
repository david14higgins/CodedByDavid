import  { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return { displayText, isTyping };
};

const Typewriter = ({ text, speed }) => {
  const { displayText, isTyping } = useTypewriter(text, speed);

  return (
    <span style={{ position: "relative" }}>
      {displayText}
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