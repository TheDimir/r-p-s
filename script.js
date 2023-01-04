const possibleChoices = ['rock', 'paper', 'scissors']
const player_win = 'Ez W'
const pc_win = 'L + ratio'
const tie = 'tie'

function getCompChoice() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}
function getPlayerChoice() {
    let playerChoice = prompt('Make your choice.', '').toLowerCase();
    while (!possibleChoices.includes(playerChoice)) {
        playerChoice = prompt('Wrong input try again.', '').toLowerCase()
    }
    return playerChoice
}
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case computerSelection:
            return tie
        case 'rock':
            return computerSelection === 'paper' ? player_win : pc_win
        case 'paper':
            return computerSelection === 'scissors' ? player_win : pc_win
        case 'scissors':
            return computerSelection === 'rock' ? player_win : pc_win
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        function gameLog() {
            console.log(winner, `Your score: ${playerScore}`, `PC score: ${computerScore}`, `Round: ${round + 1}`);
        }
        const winner = playRound(getPlayerChoice(), getCompChoice());
        switch (winner) {
            case tie:
                gameLog();
                break
            case player_win:
                ++playerScore
                gameLog();
                break
            case pc_win:
                ++computerScore
                gameLog();
                break
            default:
                throw Error('something went wrong, your mom gay')
        }
    }
    return playerScore > computerScore ? player_win : pc_win;
}
console.log(game());