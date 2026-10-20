let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let resetBtn = document.getElementById("resetBtn");
let message = document.getElementById("message");
let attemptsText = document.getElementById("attempts");

let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = Number(guessInput.value);

  if (guessInput.value === "" || guess < 1 || guess > 100) {
    message.textContent = "Enter a number between 1 and 100";
    return;
  }

  attempts++;
  attemptsText.textContent = "Attempts: " + attempts;

  if (guess === secret) {
    message.textContent = "Correct! You got it in " + attempts + " attempts";
  } else if (guess < secret) {
    message.textContent = "Too low, try higher";
  } else {
    message.textContent = "Too high, try lower";
  }

  guessInput.value = "";
}

function newGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsText.textContent = "Attempts: 0";
  message.textContent = "";
  guessInput.value = "";
}

guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", newGame);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});