//get computer choice at random

//let computerSelection = 0;
//function getCompChoice() {
    //let compValues = ["rock","paper","scissors"],
        //valueToUse = compValues[Math.floor(Math.random() * compValues.length)];
    //return valueToUse;
//}
//assign it to variable

//computerSelection = getCompChoice();

//ask for player choice
let playerSelection = 0;
function getPlayerChoice() {
    let playerChoice = prompt('Make your choice.', '');
    if (playerChoice == 'Rock') {
        playerChoice = 'Rock';
    } else if (playerChoice == 'Paper') {
        playerChoice = 'Paper';
    } else if (playerChoice == 'Scissors') {
        playerChoice = 'Scissors';  
    }  else {
        playerChoice = 'Not a valid choice';
    }
    return playerChoice
}

playerSelection = getPlayerChoice();
//compare choices from player and comp
//alert winner of the round
//count results of each round
//reapeat for 5 rounds
//alert winner