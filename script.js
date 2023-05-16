// identify three strings == Rock, Paper, Scissors //
// human vs computer. random string generator for computer, manual selector for human //
// rock beats scissors, scissors beats paper, paper beats rock, if strings are equal or same, than tie //
// check winner //
// reset //


// Selects a random string from the array using Math.random() function //
function getComputerChoice() {
    const values = ["rock","paper","scissors"],
    randomSelection = values[Math.floor(Math.random() * values.length)];
    return randomSelection
}

// Function for what happens in each round //
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "Player wins!";
        } else if (computerSelection === "paper") {
            return "Computer wins!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "Player wins!";
        } else if (computerSelection === "rock") {
            return "Computer wins!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Player wins!";
        } else if (computerSelection === "scissors") {
            return "Computer wins!";
        }
    }

    return "Tie, no one wins";
}
  
// Function to play the game //
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    while (playerScore < 5 && computerScore < 5 && roundsPlayed < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Please pick rock, paper, or scissors");

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result === "Player wins!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        roundsPlayed++;
    }

    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}
  console.log(game());
  



