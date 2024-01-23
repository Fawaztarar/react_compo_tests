// App.jsx

import React from 'react';
import Profile from './Profile';
import Counter from './Counter';
import TextInputLogger from './TextInputLogger';
import Die from './Die'; // Import the Die component

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>

      {/* Render the Counter component */}
      <Counter />

      {/* Render the Profile component with props */}
      <Profile 
        name="X1" 
        job="Developer" 
        birthdate="1990-01-01" 
      />

      {/* Add more instances of the Profile component as needed */}
      <Profile 
        name="X2" 
        job="Designer" 
        birthdate="1995-05-15" 
      />

      {/* Render the TextInputLogger component */}
      <TextInputLogger />

      {/* Render the Die component */}
      <Die />
    </div>
  );
};

export default App;




