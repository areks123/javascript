/*ROCK PAPER SCISSORS

rock > scissors > paper > */

//Ramdomizes computer's choice
function getComputerChoice() {
    const choices = ['Rock,', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//Plays one round of the game
function playRound(playerSelection, computerSelection) {
    // Convert player's choice to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();

    // Define the logic for the game
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a draw!";
    }

    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'Scissors')
                ? { result: 'win', message: "You Win! Rock beats Scissors" }
                : { result: 'lose', message: "You Lose! Paper beats Rock" };
        case 'paper':
            return (computerSelection === 'Rock')
                ? { result: 'win', message: "You Win! Paper beats Rock" }
                : { result: 'lose', message: "You Lose! Scissors beats Paper" };
        case 'scissors':
            return (computerSelection === 'Paper')
                ? { result: 'win', message: "You Win! Scissors beats Paper" }
                : { result: 'lose', message: "You Lose! Rock beats Scissors" };
        default:
            return { result: 'invalid', message: "Invalid choice" };
    }å
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Choose Rock, Paper, or Scissors:");
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);

        alert(roundResult.message + " Computer chose " + computerChoice);

        if (roundResult === 'win') {
            playerScore++;
        } else if (roundResult.result === 'lose') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You won with a score of " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore) {
        alert("Sorry, you lost. The score was " + playerScore + " to " + computerScore);
    } else {
        alert("It's a draw! Both you and the computer scored " + playerScore);
    }
}

game();  // Start the game