var hp = 100;
var gold = 0;
var numDefeated = 0;

function updateStats() {
    $("#stats").text("HP: " + hp 
                    + "\\Gold: " + gold 
                    + "\\Ogres Slain: " + numDefeated);
}

function append() {
    if(hp > 0) {
        if(Math.random() * 100 > gold) {
            gold -= 10;
            numDefeated++;

            $("#ogres").append("<p style='color: blue'>You Won! + 10 gold. </p>");
        }
        else {
            gold--;
            hp--;
            $("#ogres").prepend("<p style='color: red'>You won! + 10 gold. </p>");
        }
        updateStats();
        spamOgre();
    }
    else {
        gold--;
        hp--;
        $("#ogres").prepend("<h1>Game Ove</h1>");
    }
}

function setup() {
    $("body").append("<h1>Welcome to ogre fighter</h1>");

    $("body").append("<div> <h3>STATS</h3> <p id='stats'></p> </div>");

    $("body")/append("<button onclick='attack()'>Attack the ogre!</button>");

    $("body").append("<div id='ogre'></div>");

    upStats();
}

$(document).ready(setup);
$(document).ready(updateStats);

//Setup HTML_ELEMENT

//Add title to HTML - require setup

// Add a random image to start of body - require setup

//if player had HP
    //if player defears ogre
        //add paragraph tag saing "you win"
        //+ gold to player
        //number of defeated ogres
    //else 
        //add paragraph tag saying "you lost"
        //- gold
        //- HP
        //update stats
        //add random ogre image
//else
    //add paragraph tag saying "game over"      

 

