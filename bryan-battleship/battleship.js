var xCoord = 0;
var yCoord = 0;

function setup() {
    createCanvas(450, 450);
    rectMode(CORNERS);
    background(0);

    fill(255);
    strokeWeight(1);
    line(50, 0, 50, height);
    line(100, 0, 100, height);
    line(150, 0, 150, height);
    line(200, 0, 200, height);
    line(250, 0, 250, height);
    line(300, 0, 300, height);
    line(350, 0, 350, height);
    line(400, 0, 400, height);

    line(0, 50, width, 50);
    line(0, 100, width, 100);
    line(0, 150, width, 150);
    line(0, 200, width, 200);
    line(0, 250, width, 250);
    line(0, 300, width, 300);
    line(0, 350, width, 350);
    line(0, 400, width, 400);
}

var playerGrid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0, 0, 0]];
var computerGrid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

var carrier = 5;
var battleship = 4;
var cruise = 3;
var submarine = 3;
var destroyer = 2;



//function place(object) {
 //   if (object == "ship") {

   // }
    //else if (object == "miss") {

    //}
    //else if (object == "hit")
//}

var placeShip;

function keyPressed() {
    placeShip = false;
    if (keyCode == LEFT_ARROW) {
        if (xCoord >= 50) {
            xCoord -= 50;
        }
    }
    else if (keyCode == RIGHT_ARROW) {
        if (xCoord < 400) {
            xCoord += 50;
        }

    }
    else if (keyCode == UP_ARROW) {
        if (yCoord >= 50) {
            yCoord -= 50;
        }

    }
    else if (keyCode == DOWN_ARROW){
        if (yCoord < 400) {
            yCoord += 50;
        }
    }
    else if (keyCode == ENTER) {
        placeShip = true;
    }
}

//function mouseClicked() {

//}

function draw() {

    fill(255);
    strokeWeight(1);
    line(50, 0, 50, height);
    line(100, 0, 100, height);
    line(150, 0, 150, height);
    line(200, 0, 200, height);
    line(250, 0, 250, height);
    line(300, 0, 300, height);
    line(350, 0, 350, height);
    line(400, 0, 400, height);

    line(0, 50, width, 50);
    line(0, 100, width, 100);
    line(0, 150, width, 150);
    line(0, 200, width, 200);
    line(0, 250, width, 250);
    line(0, 300, width, 300);
    line(0, 350, width, 350);
    line(0, 400, width, 400);
    
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(xCoord, yCoord, xCoord + 50, yCoord + 50);

    if (placeShip) {
        noStroke();
        fill("green");
        rect(xCoord, yCoord, xCoord + 50, yCoord + 50);
    }
    //textSize(10);
    //textAlign(CENTER);
    //fill(255);
    //text("Place your ships!", width/2, 440);
}



