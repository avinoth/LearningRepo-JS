//Functions

//fuction value assigning that has side effect
var greet = function(name) {
    console.log("hello", name);
};

greet("hodor");


//function declaration with return value
function curse(name) {
    return "get lost" + name;
}
console.log(curse("everyone"));

//nested function with variable scopes
var glob = "global variable";
function outerScope() {
    var glob = "local variable";
    function innerScope() {
        return "I can access the " + glob;
    }
    return innerScope();
}
console.log(outerScope());
console.log("Whereas I still can access the ", glob);


//functions with extra parameter and lesser parameter than required
function moreParam(one) {
    return "I require only one variable which is " + one;
}

function lessParam(two, three, four) {
    return "I require three variables if you didn't pass it, it's undefined for me.. Here are the variables \n " + two + " " + three + " " + four;
}

console.log(moreParam("boy", "girl"));
console.log(lessParam("valid"));


//Closure

function add(a) {
    return function(b) {
        return a + b;
    };
}

var addWith = add(2);
console.log(addWith(3));

//Recursion
function factorial(n) {
    if (n === 0) 
        return 1;
    else if (n === 1) 
        return 1;
    else
        return n * factorial(n-1);
}

console.log(factorial(10));