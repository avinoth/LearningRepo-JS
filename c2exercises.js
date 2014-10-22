//Triangle
//Write a loop that makes seven calls to console.log to output the following triangle:

console.log("Triangle program output \n \n");
var hash = "#";
for (var i = 1; i <= 7; i ++){
    console.log(hash);
    hash += "#";
}

//FizzBuzz
/*

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.

*/

console.log("\n \n FizzBuzz program output");
for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0))
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
}

//Chessoutput
/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a “#” character. The characters should form a chess output.
Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

*/

console.log("\n \n Chessoutput output");

var size = 8;

var output = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 === 0)
      output += "#";
    else
      output += " ";
  }
  output += "\n";
}

console.log(output);
