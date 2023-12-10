import { useState, useEffect } from 'react';
import './TypewritterTextBox.css'

const TypewriterTextBox = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        if (text[currentIndex] !== undefined)
          return prevText + text[currentIndex];
        else
          return prevText;
      });
      currentIndex += 1;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 25);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="typewriter w-full">
      <p className='text-paragraph p-4 text-left'>
        {displayText}
      </p>
    </div>
  );
};

export default TypewriterTextBox;
