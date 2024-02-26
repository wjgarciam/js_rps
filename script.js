const computerSelection = getComputerChoice(1,3)

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


console.log(computerSelection)