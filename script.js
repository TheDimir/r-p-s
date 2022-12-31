//get computer choice at random
let computerSelection = 0;
function getCompChoice() {
    let compValues = ["rock","paper","scissors"],
        valueToUse = compValues[Math.floor(Math.random() * compValues.length)];
    return valueToUse;
}
//assign it to variable
computerSelection = getCompChoice();
//ask for player choice
//compare choices from player and comp
//alert winner of the round
//count results of each round
//reapeat for 5 rounds
//alert winner