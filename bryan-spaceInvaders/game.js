function setup() {
    createCanvas(600, 450);
    rectMode(CORNERS);
}

var start = false;
var shoot = false;
var temp;

var xCoord = 300 - 25;


var bullet1 = new Bullet();
var bulletList = [];


function draw() {

    if (!start) {
        background("black");
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


    else if (start) {
        background("black");
        noStroke();
        fill("green");
        rectMode(CORNERS);
        rect(xCoord, 410, xCoord + 50, 440);

        if (keyIsDown(LEFT_ARROW)) {
            if (xCoord > 0) {
                xCoord -= 5;
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            if (xCoord + 50 < width) {
                xCoord += 5;
            }
        }

        for (var i = 0; i < bulletList.length; i++) {
            bulletList[i].move();
            bulletList[i].draw();

            
        }

        

    }

            

}

function keyPressed() {
    if (keyCode == ENTER) {
        start = true;
    }
    else if (keyCode == 32) {
        temp = xCoord;
        bulletList.push(new Bullet(temp));
    }
}


function Bullet(num) {
    this.xBullet = xCoord + 24;
    this.yBullet = 350;
    this.move = function() {
        this.yBullet -= 4;
    }
    this.draw = function() {
        //this.move();
        rectMode(CORNER);
        fill("white");
        rect(num + 24, this.yBullet + 30, 2, 30);
    }
}



