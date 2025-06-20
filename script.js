import { WORDS } from './words.js';

const GUESSES = 6;
let guessesRemaining = GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]

console.log(rightGuessString);

function initBoard() {
    let board = document.getElementById("game-board");

    // Loop that creates the rows and boxes based on the guesses / word length
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"

        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

initBoard()

// Creates one row for each guess we give the user and creates 5 boxes for each row. 
// There is one box for each letter of the guess, and the function makes them all children of the row.