
let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    tie : 0
};

document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;

/*
if (score === null) {
    score ={
        wins : 0,
        losses : 0,
        tie : 0
    };
}
*/


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

    if(result === 'You Win.') {
        score.wins += 1;
    } else if(result === 'You Lose.') {
        score.losses += 1;
    } else {
        score.tie += 1;
    }

    //Save the score using local storage for permenent record:
    localStorage.setItem('score' ,JSON.stringify(score));

    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;

    // alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`);

}