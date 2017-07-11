var myPokemonRoster = ["Charmander", "Squirtle", "Bulbsaur", "Pikachu", "Magikarp"];

var arrayLength = myPokemonRoster.length;

var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];

myPokemonRoster.pop();

var arrayLength = myPokemonRoster.length;

myPokemonRoster.push("Ponyta");
myPokemonRoster.push("Diglett");

var arrayLength = myPokemonRoster.length;

//var newArray = ["0", "1", "2"];

//myPokemonRoster = myPokemonRoster.push(newArray);

for (var i = 0; i < myPokemonRoster.length; i++) {
    console.log(myPokemonRoster[i]);
} 

if (myPokemonRoster.length >= 5) {
    for (var i = myPokemonRoster.length - 1; i >= 0; i--) {
        console.log(myPokemonRoster[i]);
    }
} 
else {
    console.log("You can't play boi!");
}



 



 