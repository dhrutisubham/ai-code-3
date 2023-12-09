import { useState, useEffect } from 'react';

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
    <div className="typewriter p-4 max-w-screen-md overflow-auto border border-light-black rounded">
      <p className='text-paragraph text-left max-w-5'>
        {displayText}
      </p>
    </div>
  );
};

export default TypewriterTextBox;
