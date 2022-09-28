
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
        return result = "You lose! Paper beats Rock"
    else if (playerChoice == "paper" && computerChoice == "rock") 
        return result = "You win! Paper beats rock"
    else if (playerChoice == "scissors" && computerChoice == "rock")
        return result = "You lose! Rock beats scissors"
    else if (playerChoice == "rock" && computerChoice == "scissors")
        return result = "You win! Rock beats scissors"
    else if (playerChoice == "paper" && computerChoice == "scissors")
        return result = "You lose! Scissors beats paper"
    else if (playerChoice == "scissors" && computerChoice == "paper") 
        return result = "You win! Scissors beats paper"
    else if (playerChoice == computerChoice) 
        return result = `You both played ${computerChoice}.`
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound();
        alert(result);
    }
}