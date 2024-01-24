import React, { useState, useEffect } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        setJoke({ setup: data.setup, punchline: data.punchline });
      })
      .catch(error => console.error('Error fetching joke:', error));
  }, []);

  return (
    <div>
      <h2>Joke of the Moment</h2>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default Joke;
