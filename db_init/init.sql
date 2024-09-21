-- db_init/init.sql

CREATE DATABASE IF NOT EXISTS number_guessing_game;
USE number_guessing_game;

CREATE TABLE IF NOT EXISTS attempts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  attempts INT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
