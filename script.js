const computerSelection = getComputerChoice(1,3)
const playerSelection = getPlayerSelection()
const matchResult = playRound (playerSelection, computerSelection)
let playerScore = 0
let computerScore = 0

function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numberPick = Math.floor(Math.random() * (max - min + 1)) + min
    if (numberPick == 1) {
        return "rock"
    } else if (numberPick == 2) {
        return "paper"
    } else (numberPick == 3); {
        return "scissors"
    };
}

function getPlayerSelection () {
    let playerInput = prompt("Start the game by selecting Rock, Paper, or Scissors", "You must make a valid choice!")
    if (playerInput === null || playerInput === " ") {
        alert("Please enter a valid choice.");
    return;  
    }
    switch (playerInput.toLowerCase()) {
        case "rock":
            return "rock"
        case "paper":
            return "paper"
        case "scissors":
            return "scissors"  
        default:
            alert("Please make a valid choice!")
            break;
    }
}

function playRound (playerSelection, computerSelection) {

        if (playerSelection == computerSelection) {
            return 0
        } else if (playerSelection > computerSelection) {
            return +1
        } else if (playerSelection < computerSelection) {
            return -1
        } else (playerSelection == null);
            alert("Don't try me")
        
    }

function playGame() {



}

console.log(playRound(playerSelection, computerSelection));