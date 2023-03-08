const possibleChoices = ['rock', 'paper', 'scissors'];
const playerSelection = '';
const computerSelection = getCompChoice();
let playerScore = 0;
let pcScore = 0;
const scores = document.querySelector('#scores');
const _winner = document.createElement('div');
scores.appendChild(_winner);
const _yourScore = document.createElement('div');
scores.appendChild(_yourScore);
const _compScore = document.createElement('div');
scores.appendChild(_compScore);
const _tie = document.createElement('div');
scores.appendChild(_tie);

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playRound('rock', getCompChoice())
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playRound('paper', getCompChoice());
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getCompChoice())
});

function getCompChoice() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case(computerSelection): 
        _tie.textContent = 'Tie';
        case 'rock':
        computerSelection === 'scissors' ? win() : lose();
        break;
        case 'paper':
        computerSelection === 'rock' ? win() : lose();
        break;
        case 'scissors':
        computerSelection === 'paper' ? win() : lose();
        break;
    }
}

function win() {
   if (playerScore < 5) {
    playerScore++;
    _yourScore.textContent = `Nice! Your score ${playerScore}, PC Score ${pcScore}!`;
   } else if (playerScore === 5) {
    _winner.textContent = `Ez W with a score of ${playerScore}!`;
   }
}

function lose() {
    if (pcScore < 5) {
    pcScore++;
    _compScore.textContent = `Shame. Your score ${playerScore}, PC Score ${pcScore}.`;
    } else if (pcScore === 5) {
    _winner.textContent = `You suck with a score of ${pcScore}!`;
    }
}

 

    