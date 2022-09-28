
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
function playRound() {
    let playerChoice = prompt("Please choose one of rock, paper or scissors:" ).toLowerCase();
    let computerChoice = getComputerChoice();
    if (playerChoice == "rock" && computerChoice == "paper") 
        return "You lose! Paper beats Rock"
    else if (playerChoice == "paper" && computerChoice == "rock") 
        return "You win! Paper beats rock"
    else if (playerChoice == "scissors" && computerChoice == "rock")
        return "You lose! Rock beats scissors"
    else if (playerChoice == "rock" && computerChoice == "scissors")
        return "You win! Rock beats scissors"
    else if (playerChoice == "paper" && computerChoice == "scissors")
        return "You lose! Scissors beats paper"
    else if (playerChoice == "scissors" && computerChoice == "paper") 
        return "You win! Scissors beats paper"
    else if (playerChoice == computerChoice) 
        return `You both played ${computerChoice}.`
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        
    }
}