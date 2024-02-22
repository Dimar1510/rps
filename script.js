// define our choices
const choices = ['rock', 'paper', 'scissors'];

// define a number of rounds and the first one
const rounds = 5;
let round = 1;

//get info from player
function getPlayerChoice() {
    let playerChoice;
    while (true) {
    playerChoice = prompt("Round " + round + " of " + rounds + " . Rock paper scissors?").toLowerCase();
    if (choices.includes(playerChoice)) {
          break;
    }
    }
     
    return playerChoice;
}

//generate random for computer
function getComputerChoice() {
    
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

// play a round of RPS

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

// simple compare
    if (playerSelection === computerSelection) {
        console.log(`Both picked ${playerSelection}`);
        return "tie";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log(`Round ${round}: ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        if (computerSelection === 'paper') {
            console.log(`Round ${round}: ${computerSelection} beats ${playerSelection}`);
            return "lose";
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(`Round ${round}: ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        if (computerSelection === 'scissors') {
            console.log(`Round ${round}: ${computerSelection} beats ${playerSelection}`);
            return "lose";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log(`Round ${round}: ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        if (computerSelection === 'rock') {
            console.log(`Round ${round}: ${computerSelection} beats ${playerSelection}`);
            return "lose;"
        }
    }
}

// play game with scores
function playGame() {
    let computerWin = 0;
    let playerWin = 0;

// 5 rounds
    for (let i = 0; i < rounds; i++) {
        
        let result = playRound();
        if (result == "win") {
            console.log("You win this round!");
            playerWin++;
        }
        else if (result == "lose") {
            console.log("You lose this round!");
            computerWin++;
        }
        else {
            console.log("It's a tie!");
        }
        round++;
           }
    if (computerWin < playerWin) {
        console.log("You win the game!");
    }
    else if (computerWin > playerWin) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game is tied!");
    }
}

console.log(playGame());





