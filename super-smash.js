var prompt = require('prompt-sync')();

mashArray = ["Goldman Sachs", "Morgan Stanley", "Deutch Bank", "Credit Suisse"];

firstQuestion = [];
secondQuestion = [];

function promptAnswer() {
    var reply1 = prompt("How many times will you strike? ");
    firstQuestion.push(reply1);
    var reply2 = prompt("Who will you choose to fight? ");
    secondQuestion.push(reply2);
}

promptAnswer();

function toString() {
    console.log("You fought " + secondQuestion[Math.round(Math.random() * secondQuestion.length)]
 + " at " + mashArray[Math.round(Math.random() * mashArray.length)] + " and hit them " + firstQuestion[Math.round(Math.random()
 * firstQuestion.length)] + " times.");

}

toString();



