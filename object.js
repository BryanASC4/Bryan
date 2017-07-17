var charizard = {
    "attack" : "Blaze", 
    HP: 266, 
    legendary: false, 
    "type": ["Fire", "Flying"]};

charizard.HP = 100;


console.log(charizard.HP);
console.log(charizard.type)



function SuperHero(name) {
    this.realName = name;
}

var superman = new SuperHero("Clark Kent");
console.log(superman.realName);