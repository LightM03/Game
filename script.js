let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
   const userGuess = parseInt(document.getElementById("guess").value);
   const message = document.getElementById("message");
   const attemptsDisplay = document.getElementById("attempts");

   if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = "Please enter a Number between 1 and 100.";
      return;
   }

attempts++;

if (userGuess === secretNumber) {
   message.textContent = `Correct! The number was ${secretNumber}.`;
   attemptsDisplay.textContent = `You guessed it in ${attempts} attempts!`;

}
else if (userGuess < secretNumber) {
   message.textContent = "Too Low. Try Again!";

}

else {
   message.textContent = "Too High. Try Again!";
}

document.getElementById("guess").value = "";
}

function resetGame() {
      secretNumber = Math.floor(Math.random() * 100) +1;
      attempts = 0;

      document.getElementById("guess").value = "";
      document.getElementById("message").textContent = "";
      document.getElementById("attempts").textContent = "";

      console.log("Game has been reset. Enter New number:", secretNumber);
   }