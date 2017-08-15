function setup() {
    createCanvas(windowWidth - 40, windowHeight - 100);
    $("body").append('<div class="settingWrap" style="display: inline;">'
    + '<div class="colorS" style="float: left;"><h4>Color Themes</h4>'
    + '<div class="setting"><button type="button" onClick="changeColor(0); printMessage(0)">Rainbow Dash</button></div>'
    + '<div class="setting"><button type="button" onClick="changeColor(1); printMessage(1)">Sun Baked Joy</button></div>'
    + '<div class="setting"><button type="button" onClick="changeColor(2); printMessage(2)">Midnight Breeze</button></div>'
    + '<div class="setting"><button type="button" onClick="changeColor(3); printMessage(3)">Down To Earth</button></div>'
    + '<div class="setting"><button type="button" onClick="changeColor(4); printMessage(4)">Back To 80s</button></div>'
    + '<div class="setting"><button type="button" onClick="changeColor(5); printMessage(5)">Beach Weather</button></div></div>'
    + '<div class="styleS" style="float: right;"><h4>Drawing Style</h4>'
    + '<div class="setting"><button type="button" onClick="changeStyle(0); printMessage(6)">Lines</button></div>'
    + '<div class="setting"><button type="button" onClick="changeStyle(1); printMessage(7)">Smoke</button></div>'  
    + '<div class="setting"><button type="button" onClick="changeStyle(2); printMessage(8)">Shapes</button></div>'
    + '<div class="setting"><button type="button" onClick="changeStyle(3); printMessage(9)">Vertical Symmetry</button></div>'   
    + '<div class="setting"><button type="button" onClick="changeStyle(4); printMessage(10)">Horizontal Symmetry</button></div>'  
    + '<div class="setting"><button type="button" onClick="changeStyle(5); printMessage(11)">Origin Symmetry</button></div></div>'
    + '<audio controls><source src="music.mp3" type="audio/mpeg"></audio>'
    + '<div class="noti"></div>'
    + '</div>');
    background(255);
}

var colorList = ["#ff0000", "#ffff00", "#0033cc", "#00cc33", "#9933ff"];
var style = 0;

function mouseDragged() {
    var randomNum = Math.round(Math.random() * colorList.length);
    fill(colorList[randomNum]);
    if (style == 0) {
        noStroke();     
        ellipse(mouseX, mouseY, 30, 30);
    }
    else if (style == 1) {
        noStroke();
        ellipse(mouseX - Math.random() * 30, mouseY + Math.random() * 45, 10, 10);
        ellipse(mouseX - Math.random() * 20, mouseY - Math.random() * 30, 10, 10);
        ellipse(mouseX + Math.random() * 35, mouseY - Math.random() * 25, 10, 10);
        ellipse(mouseX + Math.random() * 30, mouseY + Math.random() * 45, 10, 10);
        ellipse(mouseX - Math.random() * 30, mouseY + Math.random() * 30, 10, 10);                                
    }
    else if (style == 2) {
        stroke(0);
        console.log("shapes!");
        if (mouseX % 7 == 0 || mouseY % 14 == 0) {
            ellipse(mouseX + Math.random() * 10 + 50, mouseY - Math.random() * 12 + 50, Math.random() * 15 + 35, Math.random() * 15 + 35);
        } else if (mouseX % 4 == 0 || mouseY % 7) {
            rect(mouseX + Math.random() * 10 + 50, mouseY - Math.random() * 10 + 50, Math.random() * 15 + 30, Math.random() * 15 + 30);
        }
        if (mouseX % 6 == 0 || mouseY % 14 == 0) {
            triangle(mouseX + Math.random() * 15 + 50, mouseY + Math.random() * 30 + 80, mouseX + Math.random() * 15, mouseY - 30 + Math.random() * 15, mouseX + 48 + Math.random() * 15, mouseY + Math.random() * 15 - 20);
        }
    }
    else if (style == 3) {
        noStroke();     
        ellipse(mouseX, mouseY, 30, 30); 
        ellipse(windowWidth - 40 - mouseX, mouseY, 30, 30);  
    }
    else if (style == 4) {
        noStroke();     
        ellipse(mouseX, mouseY, 30, 30); 
        ellipse(mouseX, windowHeight - 100 - mouseY, 30, 30);         
    }
    else if (style == 5) {
        noStroke();
        ellipse(mouseX, mouseY, 30, 30);
        ellipse(windowWidth - 40 - mouseX, mouseY, 30, 30);
        ellipse(mouseX, windowHeight - 100 - mouseY, 30, 30);
        ellipse(windowWidth - 40 - mouseX, windowHeight - 100 - mouseY, 30, 30);                        
    }
}

function windowResized() {
    resizeCanvas(windowWidth - 40, windowHeight - 100);
    background(255);
}

function changeColor(n) {
    if (n == 0) {
        colorList = ["#ff0000", "#ffff00", "#0033cc", "#00cc33", "#9933ff"];
        console.log("colors saved");
    }
    else if (n == 1) {
        colorList = ['#f4e409', '#eeba0b', '#c36f09', '#a63c06', '#982222'];
    }
    else if (n == 2) {
        colorList = ['#c19ab7','#9c95dc', '#228cdb', '#0b7189', '#170a1c'];
    }
    else if (n == 3) {
        colorList = ['#423629', '#4f5d2f', '#96acea', "#7d7e75", "#b0b2b8"];
    }
    else if (n == 4) {
        colorList = ['#2d7dd2', '#97cc04', '#eeb902', '#f45d01', '#47467'];
    }
    else if (n == 5) {
        colorList = ['#9cf6f6', '#f3c98b', '#daa588', '#c46d5e', '#f56960'];
    }
}

function changeStyle(z) {
    style = z;
    console.log("style Method ran!");
}










var email;
//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text("Hello " + profile.getName() + "!");
    $(".send").append("<button type='button' onClick='sendPic()'>Send To Gmail</button>");
    email = profile.getEmail();
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
    });
    $(".userName").empty();
    $(".send").empty();
}






function saveCanvas() {
    var download = document.getElementById("download");
    var picture = document("defaultCanvas0").toDataURL("image/png").replace("image/png", "image/octet-stream");
    download.setAttribute("href", picture);
    download.getAttribute("download", "HyPaint.png");
}



function printMessage(n) {
    if (n == 0) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Color Theme: Rainbow Dash</a></div>");
    } 
    else if (n == 1) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Color Theme: Sun Baked Joy</a></div>");
    }
    else if (n == 2) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Color Theme: Midnight Breeze</a></div>");
    }
    else if (n == 3) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Color Theme: Down To Earth</a></div>");
    }
    else if (n == 4) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Color Theme: Back To 80s</a></div>");
    }
    else if (n == 5) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Color Theme: Beach Weather</a></div>");
    }
    else if (n == 6) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Drawing Style: Lines</a></div>");
    }
    else if (n == 7) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Drawing Style: Smoke</a></div>");
    }
    else if (n == 8) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Drawing Style: Shapes</a></div>");
    }
    else if (n == 9) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Drawing Style: Vertical Symmetry</a></div>");
    }
    else if (n == 10) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Drawing Style: Horizontal Symmetry</a></div>");
    }
    else if (n == 11) {
        $(".noti").append("<div class='alert alert-success' role='alert'><a href='#' class='alert-link'>Current Drawing Style: Origin Symmetry</a></div>");
    }   
    setTimeout(function() {
        $(".noti").empty();
    }, 1000);
}





function sendPic() {
    // Get the canvas from the DOM and turn it into base64-encoded png data.
    var canvas = document.getElementById("defaultCanvas0");
    var dataUrl = canvas.toDataURL();

    // The relevant data is after 'base64,'.
    var pngData = dataUrl.split('base64,')[1];

    // Put the data in a regular multipart message with some text.
    var mail = [
    'Content-Type: multipart/mixed; boundary="foo_bar_baz"\r\n',
    'MIME-Version: 1.0\r\n',
    'From: ' + email +'\r\n',
    'To: ' + email + '\r\n',
    'Subject: Your Drawing From Hyper Painter!\r\n\r\n',

    '--foo_bar_baz\r\n',
    'Content-Type: text/plain; charset="UTF-8"\r\n',
    'MIME-Version: 1.0\r\n',
    'Content-Transfer-Encoding: 7bit\r\n\r\n',

    'Here is your master piece! Thank you for use HyperPainter!\r\n\r\n',

    '--foo_bar_baz\r\n',
    'Content-Type: image/png\r\n',
    'MIME-Version: 1.0\r\n',
    'Content-Transfer-Encoding: base64\r\n',
    'Content-Disposition: attachment; filename="pic.png"\r\n\r\n',

    pngData, '\r\n\r\n',

    '--foo_bar_baz--'
    ].join('');

    // Send the mail!
    $.ajax({
    type: "POST",
    url: "https://www.googleapis.com/upload/gmail/v1/users/me/messages/send?uploadType=multipart",
    contentType: "message/rfc822",
    beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Authorization','Bearer ya29.GluiBEKoYHsqg81v9PGUdJSF2fCcNhJ_SUDM-iwx8jO3pVRR3ZZ0tJ4F_3Y044iNpqqdpfpWfkl5W1MkkUN9N-AOcffCJPjajgIYEKObIDc3eZY4UBJrxguzpeHv');
    },
    data: mail
    }); 
}



