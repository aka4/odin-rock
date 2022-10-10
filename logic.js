let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice () {
    let randChoice = Math.floor(Math.random()*3);
    switch (randChoice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function compareChoice (choice1, choice2) {
    if (choice1 === choice2) return 0;
    if (choice1 === "Rock") {
        if (choice2 === "Scissors") return 1;
        if (choice2 === "Paper") return 2;
    }
    if (choice1 === "Paper") {
        if (choice2 === "Rock") return 1;
        if (choice2 === "Scissors") return 2;
    }
    if (choice1 === "Scissors") {
        if (choice2 === "Paper") return 1;
        if (choice2 === "Rock") return 2;
    }
}

const scoreboard =document.querySelector("div");

function chooseWinner(playerSel) {
    const playerSelection = playerSel.target.innerHTML;
    console.log(playerSelection);
    if(playerSelection === "Reset") {
        playerCounter = 0;
        computerCounter = 0;
    } else {
        const computerSelection = getComputerChoice();
        let result = compareChoice(playerSelection, computerSelection);
        console.log(result);
        switch (result) {
            case 0:  break;//return "Draw! " + playerSelection + " " + computerSelection;
            case 1:  playerCounter++; break;//return "Player wins! " + playerSelection + " " + computerSelection;
            case 2:  computerCounter++; break;//return "Computer wins! " + playerSelection + " " + computerSelection;
        }
    }
    
    scoreboard.textContent = `Player: ${playerCounter} Computer: ${computerCounter}`;
    if(playerCounter === 5) {
        scoreboard.textContent = `Player: ${playerCounter} Computer: ${computerCounter}  Player wins!`;
        playerCounter = 0;
        computerCounter = 0;
    }
    if(computerCounter === 5) {
        scoreboard.textContent = `Player: ${playerCounter} Computer: ${computerCounter}  Computer wins!`;
        playerCounter = 0;
        computerCounter = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", chooseWinner));




