// generate random rock, paper scissors using Math.random()

function getComputerChoice(){

    let choices = Math.random();

    if(choices < 0.34){

        return "rock";

    }else if(choices < 0.67){

        return "paper";

    }else{

        return "scissors";

    }

}

function playsSingleRound(playerSelection,computerSelection){

    // if player selects rock

    if(playerSelection.toLowerCase() === "rock"){

        if(computerSelection === "paper"){

            computerScore++;
            return "You Lose! Paper beats Rock";

        }else if(computerSelection === "scissors"){

            playerScore++;
            return "You Win! Rock beats Scissors";

        }else{

            return "It's a tie";

        }

    }

    // if player selects paper

    if(playerSelection.toLowerCase() === "paper"){

        if(computerSelection === "rock"){

            playerScore++;
            return "You Win! Paper beats Rock";

        }else if(computerSelection === "scissors"){

            computerScore++;
            return "You Lose! Scissors beats Paper";

        }else{

            return "It's a tie";

        }

    }


    // if player selects scissors

    if(playerSelection.toLowerCase() === "scissors"){

        if(computerSelection === "rock"){

            computerScore++;
            return "You Lose! Rock beats Scissors";

        }else if(computerSelection === "paper"){

            playerScore++;
            return "You Win! Scissors beats Paper";

        }else{

            return "It's a tie";

        }

    }

    // if entered input is not valid

    return "Invalid Input";

}

// Initalize playerScore and computerScore to 0

let playerScore = parseInt(0);
let computerScore = parseInt(0);

function game(){

    for(let i=0; i<5; i++){

        let playerSelection = prompt("What do you want to pick between Rock, Paper or Scissor");

        const computerSelection = getComputerChoice();

        console.log(playsSingleRound(playerSelection,computerSelection));

        console.log("The Player Score is " + playerScore);

        console.log("The Computer Score is " + computerScore);

    }

}

game();




