import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Game from './Game';

test('renders game component', () => {
  render(<Game />);
  expect(screen.getByText(/Number Guessing Game/i)).toBeInTheDocument();
});

test('allows user to input username and guess', () => {
  render(<Game />);
  const usernameInput = screen.getByPlaceholderText(/Enter your username/i);
  const guessInput = screen.getByPlaceholderText(/Enter your guess/i);

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(guessInput, { target: { value: '50' } });

  expect(usernameInput.value).toBe('testuser');
  expect(guessInput.value).toBe('50');
});