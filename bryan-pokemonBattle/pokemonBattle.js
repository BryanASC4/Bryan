function setup() {
    createCanvas(600, 450);
    rectMode(CORNERS);

}

function pokemonObject(name, health, attack, defense, type, theme) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.type = type;
    this.theme = theme;

    //this.hit() = function(other) {
        //other.health -= (this.attack * (100 - other.defense)/100);
    //}    
}

var charmander = pokemonObject("Charmander", 200, 30, 30, "Fire", "orange");
var squirtle = pokemonObject("Squirtle", 250, 25, 40, "Water", "blue");
var pikachu = pokemonObject("Pikachu", 170, 50, 20, "Electric", "yellow");
var diglett = pokemonObject("Diglett", 300, 20, 40, "Ground", "brown");
var clefairy = pokemonObject("Clefairy", 200, 35, 20, "Fairy", "pink");
var hitmonlee = pokemonObject("Hitmonlee", 150, 70, 20, "Fighting", "red");

var xCoord = 30;
var yCoord = 90;

function draw() {

    noStroke();
    background(0);
    fill("white");
    rect(30, 30, 250, 60);
    textSize(20);
    fill("black");
    text("Choose your Pokemon!", 35, 35, 250, 60);

    fill("white");
    rect(30, 90, 250, height - 30);

    fill("white");
    rect(280, 30, width - 30, height - 30);

    for (var i = 145; i < height - 30; i += 55) {
        strokeWeight(1);
        stroke("black");
        line(30, i, 250, i);
    }
    fill("black");
    text("Charmander", 40, 123);
    text("Squirtle", 40, 180);
    text("Pikachu", 40, 236);
    text("Diglett", 40, 292);
    text("Clefairy", 40, 345);
    text("Hitmonlee", 40, 398);

    strokeWeight(5);
    stroke("gray");
    noFill();
    rect(xCoord, yCoord, xCoord + 220, yCoord + 55);

    if (choose) {
        noStroke();
        fill("green");
        rect(xCoord, yCoord, xCoord + 220, yCoord + 55);
        fill("black");
        text("Press enter to confirm", xCoord + 10, yCoord + 10, xCoord + 220, yCoord + 55);
    }    

    if (yCoord == 90) {
        noStroke();
        fill("orange");
        ellipse(430, 120, 80, 80);
        rect(310, height/2, width - 60, height - 60);

        fill("black");
        text("Type: Fire\nHealth: 200\nAttack: 30\nDefense: 30", 330, height/2 + 20, width - 60, height - 60);
    }
    else if (yCoord == 145) {
        noStroke();
        fill("#00ffff");
        ellipse(430, 120, 80, 80);
        rect(310, height/2, width - 60, height - 60);

        fill("black");
        text("Type: Water\nHealth: 250\nAttack: 25\nDefense: 40", 330, height/2 + 20, width - 60, height - 60);        
    }
    else if (yCoord == 200) {
        noStroke();
        fill("yellow");
        ellipse(430, 120, 80, 80);
        rect(310, height/2, width - 60, height - 60);

        fill("black");
        text("Type: Electric\nHealth: 170\nAttack: 50\nDefense: 20", 330, height/2 + 20, width - 60, height - 60);        
    }
    else if (yCoord == 255) {
        noStroke();
        fill("#663300");
        ellipse(430, 120, 80, 80);
        rect(310, height/2, width - 60, height - 60);

        fill("black");
        text("Type: Electric\nHealth: 170\nAttack: 50\nDefense: 20", 330, height/2 + 20, width - 60, height - 60);          
    }
    else if (yCoord == 310) {
        noStroke();
        fill("pink");
        ellipse(430, 120, 80, 80);
        rect(310, height/2, width - 60, height - 60);

        fill("black");
        text("Type: Electric\nHealth: 170\nAttack: 50\nDefense: 20", 330, height/2 + 20, width - 60, height - 60);          
    }
    else if (yCoord == 365) {
        noStroke();
        fill("#990000");
        ellipse(430, 120, 80, 80);
        rect(310, height/2, width - 60, height - 60);

        fill("black");
        text("Type: Electric\nHealth: 170\nAttack: 50\nDefense: 20", 330, height/2 + 20, width - 60, height - 60);          
    }            
}  

var choose;

function keyPressed() {
    choose = false;

    if (keyCode == UP_ARROW) {
        if (yCoord >= 145) {
            yCoord -= 55;
        }

    }
    else if (keyCode == DOWN_ARROW){
        if (yCoord <= height - 140) {
            yCoord += 55;
        }
    }
    else if (keyCode == ENTER) {
        choose = true;
    }
}