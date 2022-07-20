let playerScore = 0;
let computerScore = 0;


//===============================================================
//                 QUERY SELECTORS
//================================================================
const gameContainer = document.querySelector('.game-container');
const buttonContainer = document.querySelector('.buttons-container')

// player score
const pScore = document.querySelector("span#human-score");
// computer score
const cScore = document.querySelector("span#computer-score");


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
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}
function playerChooses(playerChoice) {
    var resultMsg;
    //  check in result message already exists
    if (document.querySelector(".result-message")) {
        resultMsg = document.querySelector(".result-message")
    } else {
        resultMsg = document.createElement("h3");
        resultMsg.className = "result-message";
        gameContainer.insertBefore(resultMsg, buttonContainer)
    }
    const computerChoice = getComputerChoice();
    const roundOutcome = playRound(playerChoice, computerChoice);

    if (roundOutcome == 'win') {
        resultMsg.style.color = "green";
        console.log(playerScore);
        pScore.innerText = `${playerScore}`
        if (playerChoice == "scissors") {
            resultMsg.innerText = `You win! ${capitalize(playerChoice)} beat ${capitalize(computerChoice)}.`;
        } else {
            resultMsg.innerText = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
        }
    }
    else if (roundOutcome == 'lose') {
        resultMsg.style.color = "red";
        cScore.innerText = `${computerScore}`
        if (playerChoice == "scissors") {
            resultMsg.innerText = `You lose! ${capitalize(playerChoice)} are beaten by ${capitalize(computerChoice)}.`;
        } else {
            resultMsg.innerText = `You lose! ${capitalize(playerChoice)} is beaten by ${capitalize(computerChoice)}.`;
        }
    } else {
        resultMsg.style.color = "yellow";
        if (playerChoice == "scissors") {
            resultMsg.innerText = `Tie! ${capitalize(playerChoice)} tie with ${capitalize(computerChoice)}.`;
        } else {
            resultMsg.innerText = `Tie! ${capitalize(playerChoice)} ties with ${capitalize(computerChoice)}.`;
        }
    }

}
function gameOver() {
    if (computerScore < 5 && playerScore < 5) {
        return false;
    }
    return true;
}

const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

/* Event Listener */
rockBtn.addEventListener('click', function () {
    if (!gameOver()) {
        playerChooses('rock')
    } else {
        this.disabled = true;
    }
});
paperBtn.addEventListener('click', function () {
    if (!gameOver()) {
        playerChooses('paper')
    } else {
        this.disabled = true;
    }
});
scissorsBtn.addEventListener('click', function () {
    if (!gameOver()) {
        playerChooses('scissors')
    } else {
        this.disabled = true;
    }
});

