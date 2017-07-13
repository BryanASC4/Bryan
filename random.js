function random(number) {
    var randNum = Math.random() * number;
    console.log(randNum);

    var roundRand = Math.round(randNum);
    console.log(roundRand);

    var intRand = Math.floor(randNum);
    console.log(intRand);
}

random(6);