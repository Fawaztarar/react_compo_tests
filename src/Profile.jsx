// Profile.jsx


import React from 'react';
import './Profile.css';

const Profile = (props) => {
  return (
    <div id="profile">
      <h1 data-testid="name">{props.name}</h1>
      <p data-testid="job">{props.job}</p>
      <p data-testid="birthdate">{props.birthdate}</p>
    </div>
  );
};

export default Profile;

