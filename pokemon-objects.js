var prompt = require('prompt-sync')();

var baulbasaur = {
    name: "Baulbasaur",
    type: "Grass and poison",
    hp: 45,
    attack: 49,
    defense: 49,
    legendary: false
}

var charmander = {
    name: "Charmander",
    type: "Fire",
    hp: 39,
    attack: 52,
    defense: 43,
    legendary: false
}

var blastoise = {
    name: "Blastoise",
    type: "Water",
    hp: 79,
    attack: 83,
    defense: 100,
    legendary: false
}

var mewtwo = {
    name: "Mewtwo",
    type: "Psychic",
    hp: 106,
    attack: 110,
    defense: 90,
    legendary: true
}

var exeggutor = {
    name: "Exeggutor",
    type: "Psychic and grass",
    hp: 95,
    attack: 95,
    defense: 85,
    legendary: false
}

var diglett = {
    name: "Diglett",
    type: "Ground",
    hp: 10,
    attack: 55,
    defense: 25,
    legendary: false
}

var pokemonList = [baulbasaur, charmander, blastoise, mewtwo, exeggutor, diglett];

function printRoster(array) {
    for (var i = 0; i < array.length; i++) {
        console.log("==================");
        console.log(array[i]);
        console.log();
    }
}

//printRoster(pokemonList);

function pokemonAttacked(array) {
    for (var i = 0; i <array.length; i++) {
        array[i].hp -= 10;
    }
    printRoster(array);
}

//pokemonAttacked(pokemonList);

function attackRandom(array) {
    var takeHealth = prompt("Health to subtract: ");
    array[Math.round(Math.random() * 6)].hp - takeHealth;
}

function newPokemon(array) {
    var nameX = prompt("Pokemon name: ");
    var typeX = prompt("Pokemon type: ");
    var hpX = prompt("Pokemon health: ");
    var attackX = prompt("Pokemon attack points: ");
    var defenseX = prompt("Pokemon defense points: ");
    var legendaryX = false;
    console.log("Is pokemon legendary?\n[Y]es");
    var legendaryTemp = prompt("[N]o ");
    if (legendaryTemp.toLowerCase() == "y") {
        legendaryX = true;
    }

    var object = {
        name: nameX,
        type: typeX,
        hp: hpX,
        attack: attackX,
        defense: defenseX,
        legendary: legendaryX
    }

    array.push(object);

    printRoster(array);
}

newPokemon(pokemonList);