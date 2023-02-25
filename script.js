let computerScore = 0;
let playerScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];

// get the computer choice by getting a random number of 0-2 to use for array
function getComputerChoice() {
  return myArray[Math.floor((Math.random() * myArray.length))];
}

// method which simulates the actual game and returns the result
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();
  var result;

  if (playerSelection == computerSelection) {
    result = "Tie game!";
  }
  else if ((playerSelection == "rock" && computerSelection == "scissors") ||
           (playerSelection == "paper" && computerSelection == "rock") ||
           (playerSelection == "scissors" && computerSelection == "paper")
          ) {
    result = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    playerScore++;
  }
  else {
    result = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    computerScore++;
  }
  return result;
}

// method which capitalizes the player/computer selection's first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// method which creates a best of 5 series and prints out the results after each round
// and the final winner with the score at the end
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter your choice!");
    console.log(playRound(playerSelection, getComputerChoice));
  }
  console.log(`Player Score: ${playerScore}  |  Computer Score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Congrats you win!");
  }
  else {
    console.log("Computer wins sadly!")
  }
}

game();