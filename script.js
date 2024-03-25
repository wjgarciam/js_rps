let playerScore = 0
let computerScore = 0

function pickRock () {
    let computer = getComputerChoice()
    if (computer == "rock") { alert (`Computer choice: ${computer}, It's a tie!`) }
    if (computer == "paper") { computerScore++, alert(`Computer choice: ${computer}, you lost :C`) }
    if (computer == "scissors") { playerScore++, alert(`Computer choice: ${computer}, you win!`)}
    updateScore()
    endGame(playerScore, computerScore)
    console.log(playerScore, computerScore)
};

function pickSci () {
    let computer = getComputerChoice()
    if (computer == "scissors") { alert ("It's a tie!") }
    if (computer == "rock") { computerScore++, alert("you lose ;C") }
    if (computer == "paper") { playerScore++, alert("you win!")}
    updateScore()
    endGame(playerScore, computerScore)
    console.log(playerScore, computerScore)
};

function pickPaper () {
    let computer = getComputerChoice()
    if (computer == "paper") { alert ("It's a tie!") }
    if (computer == "scissors") { computerScore++, alert("you lose ;C") }
    if (computer == "rock") { playerScore++, alert("you win!")}
    console.log(playerScore, computerScore)
    updateScore()
    endGame(playerScore, computerScore)
};

function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    let numberPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if (numberPick == 1) {return "rock"} 
    else if (numberPick == 2) {return "paper"} 
    else (numberPick == 3); {return "scissors"};
};


function endGame(playerScore, computerScore) {
    if (playerScore == 5) {window.alert("You won!")
    restart()}
    if (computerScore == 5) {window.alert("The computer won :C sadface")
    restart()
    }
        
}

function restart(){
    playerScore = 0
    computerScore = 0
    resultsPlayer.textContent = `Player score: ${playerScore}`
    resultsComputer.textContent = `Computer score: ${computerScore}`
}

function updateScore(){
    resultsPlayer.textContent = `Player score: ${playerScore}`
    resultsComputer.textContent = `Computer score: ${computerScore}` };

    const btnRock = document.createElement("button");
    btnRock.textContent = "Rock";
    btnRock.addEventListener("click", pickRock)
    const btnPaper = document.createElement("button");
    btnPaper.textContent = "Paper";
    btnPaper.addEventListener("click", pickPaper)
    const btnSci = document.createElement("button")
    btnSci.textContent = "Scissors";
    btnSci.addEventListener("click", pickSci)
    const resultsPlayer = document.getElementById("playerScore")
    const resultsComputer = document.getElementById("computerScore")
  
    document.body.appendChild(btnRock)
    document.body.appendChild(btnPaper)
    document.body.appendChild(btnSci)
    document.body.appendChild(resultsPlayer)
    document.body.appendChild(resultsComputer)

console.log(playerScore, computerScore)
resultsPlayer.textContent = `Player score: ${playerScore}`
resultsComputer.textContent = `Computer score: ${computerScore}`