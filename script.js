import { WORDS } from './words.js';

const GUESSES = 6;
let guessesRemaining = GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]

console.log(rightGuessString);