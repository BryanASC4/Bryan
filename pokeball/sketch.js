function setup() {
    createCanvas(300, 300);
    background(255);
    ellipse(width/2,height/2, 200);
    stroke("black");
    strokeWeight(5);
    fill("white");
    arc(width/2, height/2, 200, 200, 0, PI, CHORD);
    fill("green");
    arc(width/2, height/2, 200, 200, PI, 0, CHORD);
    fill("white");
    ellipse(width/2, height/2, 50);
    fill("black");
    ellipse(width/2, height/2, 10);

    textSize(27);
    fill("white")
    text("Starbucks", width/2 - 50, 100);

}