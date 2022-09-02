let computerPlay = () => {
    const randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playerSelect() {
    var answer = window.prompt("Select 'Rock', 'Paper' or 'Scissors'");
    answer = answer.toLowerCase();
    if (answer == 'rock' || answer == 'paper' || answer == 'scissors') {
        alert("Your selected: " + answer);
        return answer;
    }
    else
        throw new Error("Please put the correct value");

}

function playGame(playerSelection, computerSelection) {
    var won = 0, lose = 0, draw = 0;

    for (let i = 0; i < 5; i++) {

        playerSelection = playerSelect();
        console.log("You picked: " + playerSelection);
        computerSelection = computerPlay();
        console.log("Computer Picked: " + computerSelection);

        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                console.log("You Won! Rock beats Scissors");
                won++;
            }
            if (computerSelection == "paper") {
                console.log("You Lose! Rock doesn't beat Paper");
                lose++;
            }
        }

        if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                console.log("You Won! Paper beats Rock");
                won++;
            }
            if (computerSelection == "scissors") {
                console.log("You Lose! Paper doesn't beat Scissors");
                lose++;
            }
        }

        if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                console.log("You Won! Scissors beats Paper");
                won++;
            }
            if (computerSelection == "rock") {
                console.log("You Lose! Scissors doesn't beat Rock");
                lose++;
            }
        }

        if (playerSelection == computerSelection) {
            console.log("It's a Draw, you both choose: " + playerSelection);
            draw++;
        }

    }

    console.log("Won: " + won);
    console.log("Lose: " + lose);
    console.log("Draw: " + draw);
}

playGame();