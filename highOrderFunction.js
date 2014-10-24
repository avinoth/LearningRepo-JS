var numList = [2, 5, 6, 9, 1, 3, 8, 4, 7];
var strList = ["apple", "mango", "cherry", "banana", "fig"];
var obj = [{name: "Tyrion",
            house: "Lannister"},
            {name: "Robb",
            house: "Stark"},
            {name: "Robert",
            house: "Baratheon"}];

//forEach method

function feExplain(arg) {
    var result = [];
    arg.forEach(function(num){
        if (num % 2 ===0)
            result.push(num);
    });
    return result;
}

console.log(feExplain(numList));

//JSON
//To JSON
var jsonObj = JSON.stringify(obj);
console.log(jsonObj);
//To Javascript
console.log(JSON.parse(jsonObj));

//Filter
console.log(strList.filter(function(str) {
    return str.length > 3;
}));

//Map
console.log(strList.map(function(str) {
    return str.toUpperCase();    
}));

//Reduce
console.log(numList.reduce(function(a, b) {
    return (a < b? a : b);
}));
