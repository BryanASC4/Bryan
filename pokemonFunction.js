function randLetter(number) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (number == 0) {
        return alphabet[Math.round(Math.random() * 26)].toUpperCase();
    }
    else {
        return alphabet[Math.round(Math.random() * 26)];
    }
}

function randWord(number) {
    var randWord = "";
    for (var i = 0; i < Math.round(Math.random() * 26); i++) {
        if (number == 0 && i == 0) {
            randWord += randLetter(0);
        }
        else {
            randWord += randLetter();
        }
    }
    return randWord;
}

function randomSentence() {
    var randSent = "";
    for (var i = 0; i < Math.round(Math.random() * 26); i++){
        if (i == 0) {
            randSent += randWord(0) + " ";
        }
        else {
            randSent += randWord() + " ";
        }
    }
    return randSent;
}

console.log(randomSentence());

function pokemonAttack(array1, array2) {
    array2[2] -= array1[1];
    return array2;
}

var firstPoke = ["Pikachu", 23, 100];
var secondPoke = ["Charizard", 50, 200];
var thirdPoke = ["Bulbasaur", 49, 200];
var fourthPoke = ["Bellsprout", 75, 80];

var pokeArray = [firstPoke, secondPoke, thirdPoke, fourthPoke];
var firstRand = Math.round(Math.random() * 4);
var firstP = pokeArray[firstRand];
pokeArray.splice(firstRand, firstRand + 1);
var secondRand = Math.round(Math.random() * 3);
var secondP = pokeArray[secondRand];

console.log(pokemonAttack(firstP, secondRand));

