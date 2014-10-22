//Inbuilt variables, functions, Loops

alert("This is an browser alert");
console.log("and this will log into the terminal");
var sure = confirm("A confirmation message that returns the Boolean value");
var input = prompt("What are you?", "text goes here");

//If else else if
if (input === "human")
    alert("Hello", input);
else if (input === "animal")
    alert("You aren't supposed to use this machine");
else
    alert("I don't who you are, where you are. I will find you and I will kill you.");

//While loop
var count = 0;
while (count < 10) {
    console.log("I am gonna print this 10 times.");
    count++;
}

//Do-While loop
do {
    var person = prompt("You must tell me your name now");
} while (!person);
console.log("Atta boy");

//For loop
var result = 1;
for (var num = 0; num <10; num++)
    result *= 2;
console.log(result);

//Switch and Break
switch(prompt("Identify yourself")) {
    case "tyrion":
        console.log("save your life dude");
        break;
    case "joffrey":
        console.log("You are so dead now");
    case "ned":
        console.log("Rest in Peace");
        break;
    default:
        console.log("Valar morghulis");
        break;
}
