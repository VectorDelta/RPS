
// variables for the players
let computerScore = 0;
let humanScore = 0;


// Set Noob log function :3
let log = console.log;

log("Hello World");


// Play the game until one of the players sides win
while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
    log(`
        The computerScore is: ${computerScore}
        The humanScore is: ${humanScore}
        `)
    
}

if(humanScore == 5)
{
    alert("Player Wins")
}
else
{
    alert("Computer Wins!")
}


// play a round with the given parameters given
function playRound(humanChoice, computerOutput) {
    if (humanChoice === computerOutput) {
        alert("Draw!")
    }
    else if (humanChoice === "Rock" && computerOutput === "Scissors") {
        alert("+1 Point to you!")
        humanScore++;
    }
    else if (humanChoice === "Scissors" && computerOutput === "Rock") {
        alert("+1 Point to the Computer!")
        computerScore++;
    }
    else if (humanChoice === "Paper" && computerOutput === "Rock") {
        alert("+1 Point to you!")
        humanScore++;
    }
    else if (humanChoice === "Rock" && computerOutput === "Paper") {
        alert("+1 Point to the Machine!")
        computerScore++;
    }
    else if (humanChoice === "Scissors" && computerOutput === "Paper") {
        alert("+1 Point to the player!")
        humanScore++;
    }
    else if (humanChoice === "Paper" && computerOutput === "Scissors") {
        alert("+1 Point to V1!")
        computerScore++;
    }
}

// Get the choice of the computer
function getComputerChoice() {
    let random = getRandomInt(3);
    switch (random) {
        case 0:
            alert("Computer Rock")
            return "Rock"
        case 1:
            alert("Computer Scissors")
            return "Scissors"
        case 2:
            alert("Computer paper")
            return "Paper"
    }

}


// Get the choice for the player
function getHumanChoice() {
    let userInput = prompt(
            `Options:
                1. Rock
                2. Paper
                3. Scissors`
        )
    switch (userInput) {
        case "1":
            alert("Rock chosen!")
            return "Rock"

        case "2":
            alert("Paper chosen!");
            return "Paper"

        case "3":
            alert("Scissors chosen!")
            return "Scissors"

        default:
            alert(`Please enter the following option number ${userInput}`)
    }
}
// Make a function to get an int with a max value of "max"
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}   