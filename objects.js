//Method
var rabbit = {};
rabbit.speak = function (line) {
  console.log("The rabbit says ", line);
};
rabbit.speak("Hello");

//this keyword
function speak(line) {
  console.log(this.name + " says " + line);
}

var person = {name: "Hodor", speak: speak};
person.speak("Hodor");

//Apply and Call

speak.apply(person, ["hodor?"]);
speak.call({name: "Ned"}, "winter is coming");

//Prototype
console.log(Object.getPrototypeOf([]) == Array.prototype);

//Object.create
var protoRabbit = {
  speak: function speak(line) {
    console.log(this.type + " rabbit says " + line);
  }
};

var blackRabbit = Object.create(protoRabbit);
var killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "Killer";
blackRabbit.type = "black";
killerRabbit.speak("I am evil");

//Constructors
function Rabbit(type) {
  this.type = type;
}

var cuteRabbit = new Rabbit("cute");
var killerRabbit = new Rabbit("Killer");
console.log(killerRabbit.type);

Rabbit.prototype.speak = function(line) {
  console.log(this.type + " rabbit says " + line);
}
killerRabbit.speak("Doom");
cuteRabbit.speak("pickety");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long and sharp";
console.log(killerRabbit.teeth);

//Delete a property
Object.prototype.nothing = "hi";
delete Object.prototype.nothing;

console.log(killerRabbit.hasOwnProperty("teeth"));

//create object without prototype
var map = Object.create(null);

//Getter and Setter methods
var pile = {
  elements: ["Screw", "Bolt"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
  console.log("Ignoring", value);
  }
};

console.log(pile.height);
pile.height = 100;
