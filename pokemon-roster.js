var prompt = require('prompt-sync')();

var pokemonList = [["Bulbasaur", "Grass and Poison", 45, 49, 49, false], ["Charmander", "Fire", 39, 43, 52, false], ["Squirtle", "Water", 44, 65, 48, false], ["Ekans", "Poison", 35, 44, 60, false], ["Pikachu", "Electric", 35, 40, 55, false], ["Clefairy", "Fairy", 70, 48, 45, false]];
var statsName = ["Name: ", "Type: ", "Health: ", "Defense: ", "Attack: ", "Legendary: "];

for (var i = 0; i < pokemonList.length; i++) {
    console.log("=======================");
    for (var j = 0; j < pokemonList[0].length; j++) {
        console.log(statsName[j] + pokemonList[i][j]);
    }
}


function findPokemon() {
    var toSearch = prompt("What Pokemon would you like to see? ");
    for (var i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i][0] == toSearch) {
            var toReturn = "";
            for (var j = 1; j < pokemonList[i].length; j++) {
                toReturn += pokemonList[i][j] + "\n"; 
            }
            return toReturn;
        }
    }
}

findPokemon();

