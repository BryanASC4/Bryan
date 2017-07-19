xCoord = 0;

function setup() {
    createCanvas(500, 500);
    background(150);
}

function draw() {
    xCoord += 0.1;
    if (xCoord >= width) {
        xCoord = 0;
    }
    fill("#ff6600");
    rect(xCoord, 75, xCoord + 50, 75);
}

function mouseIsPressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}