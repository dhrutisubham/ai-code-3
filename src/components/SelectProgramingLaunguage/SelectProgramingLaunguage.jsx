import  { useState, useEffect } from 'react';
import detectLanguage from 'programming-language-detection';

const CodeEditor = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  useEffect(() => {
    // Attempt to detect the language when the component mounts
    const language = detectLanguage(code);
    setDetectedLanguage(language || 'Language not detected');
  }, [code]);

  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  return (
    <div>
      <label htmlFor="codeInput">Enter Code:</label>
      <textarea
        id="codeInput"
        value={code}
        onChange={handleCodeChange}
        rows={10}
        cols={50}
      />
      <p>Detected Language: {detectedLanguage}</p>
    </div>
  );
};

export default CodeEditor;
