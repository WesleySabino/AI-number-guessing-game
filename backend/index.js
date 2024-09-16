require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // Update with your password
  database: process.env.DB_NAME || 'number_guessing_game',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL Database.');
});

// Initialize game state
let randomNumber = Math.floor(Math.random() * 100) + 1;

// API endpoint to evaluate guess
app.post('/guess', (req, res) => {
  const { guess, username, attempts } = req.body;
  let message = '';
  let success = false;

  if (guess > randomNumber) {
    message = 'Too high!';
  } else if (guess < randomNumber) {
    message = 'Too low!';
  } else {
    message = 'Correct!';
    success = true;

    // Record the win
    const query = 'INSERT INTO attempts (username, attempts) VALUES (?, ?)';
    db.query(query, [username, attempts], (err) => {
      if (err) {
        console.error('Error recording attempt:', err);
        res.status(500).json({ error: 'Database error' });
        return;
      }
      console.log('Attempt recorded.');
    });

    // Reset the game
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  res.json({ message, success });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
