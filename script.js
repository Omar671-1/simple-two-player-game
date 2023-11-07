let currentPlayer = 1;

function checkWord(player) {
  const inputElement = document.getElementById(`player${player}Input`);
  const messageElement = document.getElementById("message");
  const word = inputElement.value.toLowerCase();

  
  if (word === "exampleword") {
    messageElement.textContent = `Player ${player} wins this round!`;
  } else {
    messageElement.textContent = "Try again!";
  }

  inputElement.value = "";
  currentPlayer = (player % 2) + 1;
}
