//get computer choice at random

let computerSelection = 0;
function getCompChoice() {
    let compValues = ["rock","paper","scissors"]
    let valueToUse = compValues[Math.floor(Math.random() * compValues.length)];
    return valueToUse;
}
//assign it to variable

computerSelection = getCompChoice();

//ask for player choice
let playerSelection = 0;
function getPlayerChoice() {
    const playerChoice = prompt('Make your choice.', '').toLowerCase();
    const possibleChoices = ['rock', 'paper', 'scissors']
    if (possibleChoices.includes(playerChoice)) {
        return playerChoice;
    } else {
        return 'Not a valid choice';
    }
}
//assign it to variable
playerSelection = getPlayerChoice();
//compare choices and declare winner
let winner;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'W for comp';
        } else {
            return 'W for ya';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'W for comp';
        } else {
            return 'W for ya';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'W for comp';
        } else {
            return 'W for ya';
        }
    }
}

winner = playRound(playerSelection, computerSelection);
//reapeat for 5 rounds and update scores
let playerScore = 0;
let computerScore = 0;
let round = 1;

function game() {
    for (i = 1; i <= 5; i++) {
        playRound(playerSelection, computerSelection);

        if (winner === 'Tie') {
            console.log(winner, round++);
        }
        if(winner === 'W for ya') {
            console.log(winner, playerScore++, round++);
        } 
        if (winner === 'W for comp') {
            console.log(winner, computerScore++, round++);
        } 
    }
}

console.log(game());
