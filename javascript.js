
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
    if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "scissors" && computerChoice == "rock") || (playerChoice == "paper" && computerChoice == "scissors")) 
        return resultLose = `You lose; ${computerChoice} beats ${playerChoice}.`
    else if ((playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper")) 
        return resultWin = `You win; ${playerChoice} beats ${computerChoice}.`
    else 
    return result = `You both played ${computerChoice}.`
}

// (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper")
// (playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "scissors" && computerChoice == "rock") || (playerChoice == "paper" && computerChoice == "scissors")

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound();
        alert(result);
        let playerTrack = 0;
        let computerTrack = 0;
        if (result = `You win; ${playerChoice} beats ${computerChoice}.`) {
            playerTrack++;
        }
        else if (result = `You lose; ${computerChoice} beats ${playerChoice}.`) {
            computerTrack++;
        }
    }
    if (playerTrack > computerTrack) {
        return "You win!"
    }
    else if (playerTrack < computerTrack) {
        return "Too bad! You lose."
    }
    else {
        return "It's a tie!"
    }
}