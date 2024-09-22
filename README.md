# AI NUMBER GUESSING GAME

The goal of this mini project was to test the new models from OpenAI, `o1-preview` and `o1-mini`.

It occurred to me that I could develop software primarily based on large language models (LLMs) or similar AI models—something I’m calling **Artificial Intelligence Driven Development**. I’ve been thinking about this on my own, but I believe the idea isn’t hard to come up with, so it’s likely that others have thought of it as well. Regardless, I decided to try it on my own, and I really enjoyed the process.

All the base code for this project was generated entirely by ChatGPT, just based on my prompts. I only had to fix some bugs (actually, quite a lot of them). The code wasn’t perfect in my opinion, but the overall process of debugging and making general adaptations was surprisingly fun and insightful. I enjoyed it so much that I’m considering creating a blog or YouTube channel to document my experiences.

The following content was also created by AI.

## Number Guessing Game
A fun and interactive number guessing game where players attempt to guess a randomly generated number within a specified range, receiving hints after each guess. The game tracks attempts and records the fastest wins.

## Features
- **Interactive Gameplay:** Guess the number and receive hints indicating whether your guess is too high or too low.
- **User Tracking:** Players can enter their username to track their attempts and wins.
- **Persistent Data:** The game records attempts and fastest wins using a MySQL database.
- **Responsive Interface:** Built with React for a seamless user experience.
- **Dockerized Setup:** Simplified deployment using Docker and Docker Compose.

## Technologies Used
- **Frontend:** React with Vite
- **Backend:** Node.js with Express
- **Database:** MySQL
- **Containerization:** Docker, Docker Compose

## Prerequisites
- Docker and Docker Compose installed on your machine.
- Node.js and npm (for local development without Docker).
