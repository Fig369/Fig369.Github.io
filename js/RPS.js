let playerScoreEl = document.getElementById("playerScore");
let playerChoiceEl = document.getElementById("playerChoice");
let compScoreEl = document.getElementById("compScore");
let compChoiceEl = document.getElementById("compChoice");

let playerRock = document.getElementById("playerRock");
let playerPaper = document.getElementById("playerPaper");
let playerScissors = document.getElementById("playerScissors");

let compRock = document.getElementById("compRock");
let compPaper = document.getElementById("compPaper");
let compScissors = document.getElementById("compScissors");

let gameIcons = document.querySelectorAll(".far");

const choices = {
  rock: {
    name: "Rock",
    defeats: "scissors",
  },
  paper: {
    name: "Paper",
    defeats: "rock",
  },
  scissors: {
    name: "Scissors",
    defeats: "paper",
  },
};

let playerScoreNumber = 0;
let compScoreNumber = 0;
let compChoice = "";

function resetAll() {
  playerScoreNumber = 0;
  compScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  compScoreEl.textContent = compScoreNumber;
  playerChoiceEl.textContent = "";
  compChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
}

function compRandomChoice() {
  const compChoiceNumber = Math.random();
  if (compChoiceNumber < 0.2) {
    compChoice = "rock";
  } else if (compChoiceNumber <= 0.4) {
    compChoice = "paper";
  } else if (compChoiceNumber <= 0.6) {
    compChoice = "scissors";
  }
}

function displayCompChoice() {
  switch (compChoice) {
    case "rock":
      compRock.classList.add("selected");
      compChoiceEl.textContent = "--Rock";
      break;
    case "paper":
      compPaper.classList.add("selected");
      compChoiceEl.textContent = "--Paper";
      break;
    case "scissors":
      compScissors.classList.add("selected");
      compChoiceEl.textContent = "--Scissors";
      break;

    default:
      break;
  }
}

function updateScore(playerChoice) {
  if (playerChoice === compChoice) {
    resultText.textContent = "It's a tie";
  } else {
    let choice = choices[playerChoice];
    if (choice.defeats.indexOf(compChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      compScoreNumber++;
      compScoreEl.textContent = compScoreNumber;
    }
  }
}

function resetSelected() {
  gameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function checkResult(playerChoice) {
  resetSelected();
  compRandomChoice();
  displayCompChoice();
  updateScore(playerChoice);
}

function select(playerChoice) {
  checkResult(playerChoice);

  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = "--Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = "--Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoice.textContent = "--Scissors";
      break;
    default:
      break;
  }
}

playerRock.addEventListener("click", function () {
  document.body.classList.toggle("colorrock");
});
playerPaper.addEventListener("click", function () {
  document.body.classList.toggle("colorpaper");
});
playerScissors.addEventListener("click", function () {
  document.body.classList.toggle("colorscissor");
});
