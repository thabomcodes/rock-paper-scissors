let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

function playRound(playerSelection, computerSelection) {
    const playerMove = playerSelection.toLowerCase();
    const computerMove = computerSelection.toLowerCase();

    if (playerMove == computerMove) {
        return 'tie';
    }
    else if ((playerMove == "rock" && computerMove == "paper") ||
        (playerMove == "paper" && computerMove == "scissors") ||
        (playerMove == "scissors" && computerMove == "rock")) {
        computerScore++;
        return 'lose';
    }
    else if ((playerMove == "scissors" && computerMove == "paper") ||
        (playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "paper" && computerMove == "rock")) {
        playerScore++;
        return 'win';
    }
    else {
        return "Error!";
    }
}

function playerChooses(choice) {
    roundOutcome = playRound(choice, getComputerChoice());
}

const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

/* Event Listener */
rockBtn.addEventListener('click', () => playerChooses('rock'))
paperBtn.addEventListener('click', () => playerChooses('paper'))
scissorsBtn.addEventListener('click', () => playerChooses('scissors'))

