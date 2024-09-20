/** @type {import('jest').Config} */
const config = {
  verbose: false,
  // testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ['js', 'jsx'],
};

module.exports = config;