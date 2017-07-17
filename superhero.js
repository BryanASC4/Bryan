function Superhero(name, ability, gender, enemy) {
    this.name = name;
    this.ability = ability;
    this.gender = gender;
    this.enemy = enemy;

    this.talk = function() {
        console.log("My name is " + name);
    }

    this.movement = function(direction) {
        console.log(name + " moves " + direction);
    }

}



var batman = new Superhero("Bruce Wayne", "Grappling hook", "Male", "Jocker");
var superman = new Superhero("Clark Kent", "Lazer eye", "Male", "????");

batman.talk();
superman.talk();


batman.movement("up");