// Counter.jsx

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;
