var prompt = require('prompt-sync')();

console.log("===============WELCOME=TO=BONELESS=ROCK=PAPER=SCISSORS===============");
var gameProg = false;

var startGame = prompt("Press the enter key to start!", "<Anykey>"); 
if (startGame == null) {
    gameProg = true;
}


while (gameProg == true) {


var pStringChoice = prompt("Make your choice! \n[R]ock \n[P]aper \n[S]cissors", "<Player choice>");

var cChoice = Math.floor(Math.random() * 3 + 1);

if (pStringChoice.equalsIgnoreCase("r")) {
    pChoice = 1;
}
else if (pStringChoice.equalsIgnoreCase("p")) {
    pChoice = 2;
}
else if (pStringChoice.equalsIgnoreCase("s")) {
    pChoice = 3;
}
else {
    console.log("Invalid choice");
    pChoice = 999;
}

if (pChoice == 1) {
    if (cChoice == 1) {
        console.log("You chose rock and the computer chose rock");
        console.log("It's a tie!");        
    }
    else if (cChoice == 2) {
        console.log("You chose rock and the computer chose paper");
        console.log("The computer wins!");        
    }
    else if (cChoice == 3) {
        console.log("You chose rock and the computer chose scissors");
        console.log("You win!");              
    }
}
else if (pChoice == 2){
    if (cChoice == 1) {
        console.log("You chose paper and the computer chose rock");
        console.log("You win!");       
    }
    else if (cChoice == 2) {
        console.log("You chose paper and the computer chose paper");
        console.log("It's a tie!");        
    }
    else if (cChoice == 3) {
        console.log("You chose paper and the computer scissors");
        console.log("The computer wins!");               
    }
}
else if (pChoice == 3) {
    if (cChoice == 1) {
        console.log("You chose scissors and the computer chose rock");
        console.log("The computer wins!");        
    }
    else if (cChoice == 2) {
        console.log("You chose scissors and the computer chose paper");
        console.log("You win!");       
    }
    else if (cChoice == 3) {
        console.log("You chose scissors and the computer chose scissors");
        console.log("It's a tie!");                
    }
}
else {
    "The computer wins!"
}

var playAgain = prompt("Play again? \n[Y]es \n[N]o", "<choice>");
if (playAgain.equalsIgnoreCase("n")) {
    gameProg = false;
}
}

console.log("Thanks for playing!");

