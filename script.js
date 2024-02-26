const computerSelection = getComputerChoice(1,3)
let playerSelection = prompt("What's your pick?").toLowerCase();

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
    } else (playerSelection < computerSelection); {
        return 'you lose :c'
    }
}

console.log(playRound(playerSelection, computerSelection)); 