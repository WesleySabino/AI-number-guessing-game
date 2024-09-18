import React, { useState } from 'react';
import axios from 'axios';

function Game() {
  const [guess, setGuess] = useState('');
  const [hint, setHint] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [username, setUsername] = useState('');

  const handleGuess = async () => {
    if (!username) {
      alert('Please enter your username.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/guess', {
        guess: Number(guess),
        username,
        attempts,
      });

      setHint(response.data.message);

      if (response.data.success) {
        alert(`Congratulations, ${username}! You've guessed the number in ${attempts} attempts.`);
        setAttempts(1);
        setHint('');
      } else {
        setAttempts(attempts + 1);
      }
    } catch (error) {
      console.error('Error making guess:', error);
    }

    setGuess('');
  };

  return (
    <div className="game-container">
      <h1>Number Guessing Game</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />
      <input
        type="number"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      {hint && <p>{hint}</p>}
    </div>
  );
}

export default Game;
