import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    // Filter out non-numeric characters
    const filteredValue = event.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(filteredValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://url.com/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, phoneNumber }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Enter your password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Enter your phone number:
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;


