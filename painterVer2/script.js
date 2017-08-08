

function setup() {
    createCanvas(windowWidth - 200, windowHeight - 100);
    background(255);
    $("#defaultCanvas0").append("<button type='button'>THIS IS BUTTON</button>");
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

function windowResized() {
    resizeCanvas(windowWidth - 200, windowHeight - 100);
    background(255);
}




//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text("Hello " + profile.getName() + "!");
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
    });
    $(".userName").empty();
}


