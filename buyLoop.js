var prompt = require('prompt-sync')();
var money = 1000;
var bag = [];

while (money >= 100) {
    console.log("[Y]eezy - $400 \n[G]ucci flip flops - $200 \n[R]ay Bans - $100")
    var answer = prompt("What would you like: ", "");
    if (answer.toLowerCase() == "y") {
        while (money >= 400) { // MY WHILE LOOP  STILL NEED WORK
            money -= 400;
            bag.push("Yeezy");
            console.log("You have purchased one pair of Yeezy");
        }
    }
    else if (answer.toLowerCase() == ("g")) {
        while (money >= 200) {
            money -= 200;
            bag.push("Gucci flip flop");
            console.log("You have purchased one pair of Gucci flip flops")
        }
    }
    else if (answer.toLowerCase() == ("r")) {
        while (money >= 100) {
            money -= 100;
            bag.push("Ray Bans");
            console.log("You have purchased one pair of Ray Bans");
        }
    }
    else {
        console.log("Invalid choice");
    }

    console.log("You have $" + money + " remaining.");
}