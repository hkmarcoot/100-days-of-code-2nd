let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userg, comg, targetNum) {
  let userDiff = Math.abs(userg - targetNum);
  let comDiff = Math.abs(comg - targetNum);

  return userDiff <= comDiff;
}

function updateScore(str) {
  if (str === "human") {
    humanScore += 1;
  } else if (str === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
