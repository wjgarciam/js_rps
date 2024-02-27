const computerSelection = getComputerChoice(1,3)
const playerSelection = getPlayerSelection()

function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numberPick = Math.floor(Math.random() * (max - min + 1)) + min
    if (numberPick == 1) {
        return 'rock'
    } else if (numberPick == 2) {
        return 'paper'
    } else (numberPick == 3); {
        return 'scissors'
    };
}
function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'tie!'
    } else if (playerSelection > computerSelection) {
        return 'you win!'
    } else if (playerSelection < computerSelection) {
        return 'you lose :c'
    } else (playerSelection == null);
        alert("Don't try me")
};

function getPlayerSelection () {
    let playerInput = prompt("Start the game by selecting Rock, Paper, or Scissors", "You must make a valid choice!")
    if (playerInput === null || playerInput === " ") {
        alert('Please enter an answer.');
    getPlayerSelection();
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

console.log(playRound(playerSelection, computerSelection));
