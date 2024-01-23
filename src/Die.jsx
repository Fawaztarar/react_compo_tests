// Die.jsx

import React, { useState } from 'react';

const Die = () => {
  // State to store the current roll value
  const [roll, setRoll] = useState(null);

  // Function to generate a random number between 1 and 6
  const generateRandomRoll = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setRoll(newRoll);
  };

  return (
    <div>
      <h2>Die Roller</h2>
      <button onClick={generateRandomRoll}>Roll Die</button>

      {roll !== null && (
        <p>
          Result: <strong>{roll}</strong>
        </p>
      )}
    </div>
  );
};

export default Die;
