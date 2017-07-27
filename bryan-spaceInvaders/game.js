function setup() {
    createCanvas(600, 450);
    rectMode(CORNERS);
}

var start = false; // Boolean to change from start screen to game
var temp; // Missile shoot x position
var bulletList = []; // A list of bullet always to be shot
var ship1 = new Ship(); // Ship object

function draw() {
    if(!start) {
        background(0);
        textAlign(CENTER);
        textSize(30);
        stroke("white");
        textStyle(NORMAL);
        noFill();
        text("SPACE INVADER", width/2, height/2 - 30);
        textStyle(ITALIC);
        strokeWeight(0.3);
        textSize(10);
        text("PRESS ENTER TO START", width/2, height/2 - 10);        
    }
    
    if (start) {
        background(0);
        ship1.draw();

        if (keyIsDown(LEFT_ARROW)) {
            ship1.toLeft();
        }   

        if (keyIsDown(RIGHT_ARROW)) {
            ship1.toRight();
        }     

        for (var i = 0; i < bulletList.length; i++) {
            bulletList[i].draw();
        }
    }
}

function keyPressed() {
    if (keyCode == ENTER) {
        start = true;
    }
    if (keyCode == 32) {
        ship1.shoot();
    }
}

function Ship() {
    this.xCoord = 275;
    this.draw = function() {
        noStroke();
        fill("green");
        rectMode(CORNERS);
        rect(this.xCoord, 410, this.xCoord + 50, 440);
    }
    this.toLeft = function() {
        if (this.xCoord > 0){
            this.xCoord -= 5;
        }
    }
    this.toRight = function() {
        if (this.xCoord < width) {
            this.xCoord += 5;
        }
    }
    this.shoot = function() {
        temp = this.xCoord;
        bulletList.push(new Bullet(temp));
    }
}

function Bullet(num) {
    this.yBullet = 350;
    this.move = function() {
        this.yBullet -= 4;
    }
    this.draw = function() {
        this.move();
        rectMode(CORNER);
        fill(255);
        rect(num + 25, this.yBullet + 30, 2, 30);
    }
}

function Alien(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function() {
        rectMode(CORNER);
        rect(this.x, this.y, 35, 20);
    }
    this.move = function() {
        translate(x, y); // ASDGASFAW FQAEBQC FQEFXASXDC
    }
    this.shoot = function() {

    }
}



