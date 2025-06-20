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
    for (let i = 0; i < GUESSES; i++) {
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

// Input code
document.addEventListener("keyup", (e) => {
    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = String(e.Key) 
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        checkGuess()
        return
    }

    let found = pressedKey.match(/[a-z]/gi) // Checks if the input is a letter or not
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

// Input functions
function insertLetter (pressedKey) {
    if (nextLetter === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -= 1
}