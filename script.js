const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const playerScoreEl = document.querySelector(".playerScore");
const computerScoreEl = document.querySelector(".computerScore");
const announceWinnerEl = document.querySelector(".announceWinner");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    results.textContent = playRound(button.id, computerPlay());
    playerScoreEl.textContent = `Player Score: ${playerScore}.`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}.`;
    announceWinnerEl.textContent = showWinner();
    resetScore();
  });
});

function computerPlay() {
  const items = ["rock", "paper", "scissors"];

  const randomIndex = getRandomIndex(items);

  const computerChoice = items[randomIndex];

  return computerChoice;
}

function playRound(player, computer) {
  player = player.toLowerCase();

  if (player === computer) {
    return "Tie!";
  } else if (player === "rock") {
    if (computer === "scissors") {
      playerScore++;
      return "You Win! Computer Lose. Rock Beats Scissors";
    } else if (computer === "paper") {
      computerScore++;
      return "Computer Win! You Lose. Paper Beats Rock";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      playerScore++;
      return "You Win! Computer Lose. Paper Beats Rock";
    } else if (computer === "scissors") {
      computerScore++;
      return "Computer Win! You Lose. Scissors Beats Paper";
    }
  } else if (player === "scissors") {
    if (computer === "paper") {
      playerScore++;
      return "You Win! Computer Lose. Scissors Beats Paper.";
    } else if (computer === "rock") {
      computerScore++;
      return "Computer Win! You Lose. Rock Beats Scissors.";
    }
  } else {
    return "Please Select An Option.";
  }
}

function showWinner() {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore == computerScore) {
      resetGame();
      return `Player Score: ${playerScore}. Computer Score: ${computerScore}\n\nTie!`;
    } else if (playerScore > computerScore) {
      resetGame();
      return `Player Score: ${playerScore}. Computer Score: ${computerScore}\n\nPlayer Wins!`;
    } else if (playerScore < computerScore) {
      resetGame();
      return `Player Score: ${playerScore}. Computer Score: ${computerScore}\n\nComputer Wins!`;
    }
  }
}

function resetGame() {
  results.textContent = "";
  playerScoreEl.textContent = "";
  computerScoreEl.textContent = "";
  announceWinnerEl.textContent = "";
}

function resetScore() {
  if (playerScore == 5 || computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
