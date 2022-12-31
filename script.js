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
        return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    } else {
        return 'Not a valid choice';
    }
}
//assign it to variable
playerSelection = getPlayerChoice();

//compare choices from player and comp
function game() {
    
}

//alert winner of the round
//count results of each round
//reapeat for 5 rounds
//alert winner