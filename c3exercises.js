//Minimum
// Write a function min that takes two arguments and returns their minimum.
function min(a, b) {
    return (a < b ? a : b);
}

console.log(min(3, -3));


//Recursion
/*Define a recursive function isEven that returns Boolean value whether it is Even or not.
Do not use Modulo operator*/

function isEven(val) {
    if (val === 0)
        return true;
    else if (val === 1)
        return false;
    else
        return isEven(val - 2);
}

console.log(isEven(256));


//Bean Counting
/*
Write a function countBs that takes a string as its only argument 
and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase "B" characters).
Rewrite countBs to make use of this new function.
*/

//FIRST VERSION
function countBs(input) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == "B")
            result++;
    }
    return result;
}

console.log(countBs("BbC"));

//SECOND VERSION
function countChar(input, char) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == char)
            result++;
    }
    return result;
}

function newCountBs(input) {
    return countChar(input, "B");
}

console.log(countChar("kkkkkararakkakr", "k"));
console.log(newCountBs("BBBC"));