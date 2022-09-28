
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        return "rock";
    }
    else if ((compChoice > 0.33) && (compChoice <= 0.67)) {
        return "paper";
    }
    else {
        return "scissors"
    }
} 

function getPlayerChoice() {
    let playerChoice = prompt("Please play one of rock, paper, or scissors:" )
    let playerChoiceCorrected = playerChoice.toLowerCase();
    return playerChoiceCorrected;
}

function playOneRound(playerSelection, compSelection) {
    let playerSelection = getPlayerChoice();
    let compSelection = getComputerChoice();
}

