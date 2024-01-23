// TextInputLogger.jsx

import React from 'react';

const TextInputLogger = () => {
  const handleInputChange = (event) => {
    // Log the value entered into the input
    console.log('Typed:', event.target.value);
  };

  return (
    <div>
      <label htmlFor="textInput">Type something:</label>
      <input
        type="text"
        id="textInput"
        onChange={handleInputChange}
        placeholder="Type here..."
      />
    </div>
  );
};

export default TextInputLogger;
