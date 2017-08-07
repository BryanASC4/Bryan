function rps(x){
    var playerChoice = x;
    console.log(playerChoice);
    var comp = ['r', 's', 'p'];
    var compChoice = comp[Math.round(Math.random()*2)];
    
    if (playerChoice == compChoice) {
        $(".body").append("<h3>It's a Tie!</h3>");
    }
    else if (playerChoice == 'r') {
        if (compChoice == 'p') {
            $(".body").append("<h3>You lost! You chose rock and Computer chose paper</h3>");
        }
        else if (compChoice == 's') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
    }
    else if (playerChoice == 'p') {
        if (compChoice == 'p') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
        else if (compChoice == 's') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
    }
    else if (playerChoice == 's') {
        if (compChoice == 'p') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
        else if (compChoice == 's') {
            $(".body").append("<h3>It's a Tie!</h3>");
        }
    }



}