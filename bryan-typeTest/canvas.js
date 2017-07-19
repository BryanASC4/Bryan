var points = 0;
var string = "";
var words = "";


function setup() {
    createCanvas(500, 500);
    textSize(20);
    noLoop();
}

var sentenceList = ["Dark side of the moon", 
                    "This is what you'll get",
                    "Where is my mind", 
                    "I love you Jesus Christ", 
                    "Today is the greatest", 
                    "I need an easy friend", 
                    "Windmill windmill for the land"];

function draw() {
    background(0);
    var randomNum = Math.round(Math.random() * 6);
    fill("white");
    words = sentenceList[randomNum];
    text(sentenceList[randomNum], 100, 100);
}

function keyTyped() {

        string += key;
        print(string);
    

    if (keyCode == ENTER) {
        if (string == words) {
            print("Good job! +10");
            points += 10;
        }
        else {
            print("Wrong!");
        }
    }    
}


function mousePressed() {
    redraw();
    string = "";
}



