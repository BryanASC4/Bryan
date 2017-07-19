function setup() {
    createCanvas(500, 500);
    background(100);
}

function mouseDragged() {
    var randomNum = Math.round(Math.random() * 3)
    if (mouseX <= 250 && mouseY <= 250) {
        fill("red");
    }
    else if (mouseX > 250 && mouseY <= 250) {
        fill("blue");
    }
    else if (mouseX > 250 && mouseY >250) {
        fill("green");
    } 
    else {
        fill("yellow");
    }
    stroke("black")
    strokeWeight(1);
    if (randomNum == 2) {
        ellipse(mouseX, mouseY, 20, 20);
    }
    else if (randomNum == 1) {
        rect(mouseX + 10, mouseY + 10, 20, 20); 
    }
    else {
        triangle(mouseX, mouseY, mouseX + 10, mouseY + 10, mouseX - 6, mouseY + 10);
    }
    return false;
}

