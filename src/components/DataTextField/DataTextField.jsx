import React, { useState } from 'react';

const DataTextField = ({ onInputChange })=> {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onInputChange(inputValue);
        }
    };

    const handleClick = () => {
        onInputChange(inputValue);
    };

    return (
        <div>
        <label htmlFor="inputField">Enter Text:</label>
        <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
      <button onClick={handleClick}>Submit</button>
    </div>
    );
}

export default DataTextField;