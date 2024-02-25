
const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

let round = 1;
let computerWin = 0;
let playerWin = 0;



function playRound(arg) {

    let playerSelection = arg;

    let computerSelection = getComputerChoice();

// get messages 
    let tieMessage = `Round ${round}: both picked ${playerSelection}`;
    let winMessage = `Round ${round}: ${playerSelection} beats ${computerSelection}`;
    let loseMessage = `Round ${round}: ${computerSelection} beats ${playerSelection}`;
    
// some icon goodness 

    switch (playerSelection) {
        case 'rock':
            playerIco.textContent = '✊';
            break;
        
        case 'paper':
            playerIco.textContent = '✋';
            break;
        
        case 'scissors':
            playerIco.textContent = '✌';
            break;
        default:
            break;
    }

    switch (computerSelection) {
        case 'rock':
            computerIco.textContent = '✊';
            break;
        
        case 'paper':
            computerIco.textContent = '✋';
            break;
        
        case 'scissors':
            computerIco.textContent = '✌';
            break;
        default:
            break;
    }



  // simple compare  
    if (playerSelection === computerSelection) {
        result.textContent = tieMessage;
        return "tie";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            result.textContent = winMessage;
            return "win";
        }
        if (computerSelection === 'paper') {
            result.textContent = loseMessage;
            return "lose";
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result.textContent = winMessage;
            return "win";
        }
        if (computerSelection === 'scissors') {
            result.textContent = loseMessage;
            return "lose";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            result.textContent = winMessage;
            return "win";
        }
        if (computerSelection === 'rock') {
            result.textContent = loseMessage;
            return "lose"; 
        }
    }
}

function playGame(arg) {
    let result = playRound(arg);
    if (result == "win") {
        playerWin++;
        playerScore.textContent = playerWin;
        message.textContent = "You win this round!";
    }
    else if (result == "lose") {
        computerWin++;
        computerScore.textContent = computerWin;
        message.textContent = "You lose this round!";
    }
    else message.textContent = "This round is tied!";
    round++;
    if (computerWin === 5) {
        message.style.color = "red";
        message.textContent = "YOU LOSE THE GAME";
        gameOver();
    }
    if (playerWin === 5) {
        message.style.color = "green";
        message.textContent = "YOU WIN THE GAME";
        gameOver();
    } 
}    

function gameOver() {
    reset.appendChild(btnReset);
    btnReset.textContent = "Reset";
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function purgeResults() {
    computerWin = 0;
    playerWin = 0;
    playerScore.textContent = playerWin;
    computerScore.textContent = computerWin;
    round = 1;
    result.textContent = "First to score 5 points wins the game";
    message.textContent = "Choose your weapon";
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    message.style.color = "";
    computerIco.textContent = "X";
    playerIco.textContent = "X";
    reset.removeChild(btnReset);
}

// UI

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const message = document.querySelector('#message');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const btnReset = document.createElement('button');
const playerIco = document.querySelector('#playerIco');
const computerIco = document.querySelector('#computerIco');

btnRock.addEventListener('click', () => {playGame('rock')});
btnPaper.addEventListener('click', () => {playGame('paper')});
btnScissors.addEventListener('click', () => {playGame('scissors')});
btnReset.addEventListener('click', () => {purgeResults()});


