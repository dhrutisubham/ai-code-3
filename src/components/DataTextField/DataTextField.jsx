import React, { useState } from 'react';
import './DataTextField.css';

const DataTextField = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onInputChange(inputValue);
    }
  };

  const handleClick = () => {
    onInputChange(inputValue);
  };

  return (
    <div className="flex flex-col items-center mt-4 w-full max-w-screen-md">
      <div className="flex w-full border p-2 rounded-md space-x-2">
        <textarea
          id="inputField"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type here..."
          className="resize-none p-2 w-full"
          rows={1}
          cols={100}
        />
        <button
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DataTextField;
