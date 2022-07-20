function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

function playRound(playerSelection, computerSelection) {
    const playerMove = playerSelection.toLowerCase();
    const computerMove = computerSelection.toLowerCase();

    if (playerMove == computerMove) {
        return `It's a tie! ${playerMove} ties with ${computerMove}.`;
    }
    else if ((playerMove == "rock" && computerMove == "paper") ||
        (playerMove == "paper" && computerMove == "scissors") ||
        (playerMove == "scissors" && computerMove == "rock")) {
        return `You lose! ${playerMove} is beaten by ${computerMove}.`;
    }
    else if ((playerMove == "scissors" && computerMove == "paper") ||
        (playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "paper" && computerMove == "rock")) {
        return `You win! ${playerMove} beats ${computerMove}.`;
    }
    else {
        return "Error!";
    }
}
