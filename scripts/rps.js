function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return rps[choice];
}