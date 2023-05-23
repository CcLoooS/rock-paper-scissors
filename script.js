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

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      const playerSelection = button.value;
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      resultElement.textContent = result;
    });
  })