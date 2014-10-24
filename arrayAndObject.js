//Array

var list = [2, 3, 5, 6, 8];
console.log(list[3]); //=> 6
list.push(9);
console.log(list); //=> [2, 3, 5, 6, 8, 9]
list.pop();
console.log(list);//=> [2, 3, 5, 6, 8]
console.log(list.indexOf(3));
console.log(list.lastIndexOf(6));
list.shift();
console.log(list); //=> [ 3, 5, 6, 8 ]
list.unshift(1);
console.log(list); //=> [ 1, 3, 5, 6, 8 ] 
console.log(list.slice(2,4)); //=>[ 5, 6 ]

//Object
var person = {
    name: "Bran",
    age: 21,
    country: "westeros"
};
console.log(person.name);
person.leg = false;
console.log(person.leg);
delete person.age;
console.log("age" in person);