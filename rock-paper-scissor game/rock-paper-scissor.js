
let computerMove = "";

function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        computerMove = "Rock";
    } else if (randomNumber < 2 / 3) {
        computerMove = "Paper";
    } else {
        computerMove = "Scissor";
    }
}

function playGame(playerMove) {
    pickComputerMove(); // Call the function to set computerMove

    let result = "";

    // Normalize playerMove to handle case sensitivity
    playerMove = playerMove.toLowerCase();

    if (playerMove === "scissor") {
        if (computerMove === "Rock") {
            result = "You Lose.";
        } else if (computerMove === "Paper") {
            result = "You Win.";
        } else {
            result = "Tie.";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "Rock") {
            result = "You Win.";
        } else if (computerMove === "Paper") {
            result = "Tie.";
        } else {
            result = "You Lose.";
        }
    } else if (playerMove === "rock") {
        if (computerMove === "Rock") {
            result = "Tie.";
        } else if (computerMove === "Paper") {
            result = "You Lose.";
        } else {
            result = "You Win.";
        }
    } else {
        alert("Invalid move! Please choose Rock, Paper, or Scissor.");
        return; // Exit the function on invalid input
    }

    alert(`You Picked ${playerMove}.\nComputer Picked ${computerMove}.\n${result}`);
}