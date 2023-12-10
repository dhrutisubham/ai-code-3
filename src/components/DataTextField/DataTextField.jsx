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
    <div className="sticky bottom-0 bg-white1 flex flex-col items-center mt-2 w-full p-2 border border-white3 rounded-lg">
      <div className="flex w-full items-end space-x-2">
        <textarea
          id="inputField"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your Code here..."
          className="resize-none overflow-y-auto max-h-64 h-fit p-2 pl-4 w-full rounded-lg enabled:outline-none"
          rows={1}

        />
        <button
          className="black_btn max-h-10"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DataTextField;
