const computerSelection = getComputerChoice()
let playerSelection = getPlayerSelection()
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    let numberPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1
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
            return "It's a tie!"
        } else if (playerSelection > computerSelection) {
            playerScore++
            return "You win!"
        } else if (playerSelection < computerSelection) {
            computerScore++
            return "You lose!"
        } else (playerSelection == null);
            alert("Don't try me")
        
    }

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection()
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore)
        console.log(computerScore)
    }
