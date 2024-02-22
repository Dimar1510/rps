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

// get messages 
let tieMessage = `Round ${round}: both picked ${playerSelection}, it's a tie`;
let winMessage = `Round ${round}: ${playerSelection} beats ${computerSelection}, you win this round`;
let loseMessage = `Round ${round}: ${computerSelection} beats ${playerSelection}, you lose this round`;

// simple compare
    if (playerSelection === computerSelection) {
        console.log(tieMessage);
        return "tie";
    }
    else if (playerSelection === 'rock') {


        if (computerSelection === 'scissors') {
            console.log(winMessage);
            return "win";
        }
        if (computerSelection === 'paper') {
            console.log(loseMessage);
            return "lose";
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log(winMessage);
            return "win";
        }
        if (computerSelection === 'scissors') {
            console.log(loseMessage);
            return "lose";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log(winMessage);
            return "win";
        }
        if (computerSelection === 'rock') {
            console.log(loseMessage);
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
            playerWin++;
        }
        else if (result == "lose") {
            computerWin++;
        }
        round++;
           }
    console.log(`Score: ${playerWin} - ${computerWin}`);
    if (computerWin < playerWin) {
        console.log("You won the game!");
    }
    else if (computerWin > playerWin) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game is tied!");
    }
    
}

console.log(playGame());





