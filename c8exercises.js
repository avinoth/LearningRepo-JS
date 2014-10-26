//Retry
/*
Say you have a function primitiveMultiply that, in 50 percent of cases, 
multiplies two numbers and in the other 50 percent raises an exception of type MultiplicatorUnitFailure.
Write a function that wraps this clunky function and just keeps trying until a call succeeds,
returning the result.

Make sure you handle only the exceptions you are trying to handle.
*/

function MultiplicatorUnitFailure(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "ProbablityError";


function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("trying again");
}

function reliableMultiply(a, b) {
    for (;;)
        try {
            primitiveMultiply(a, b);
            }
        catch(e) {
            if (e instanceof MultiplicatorUnitFailure)
                console.log("Invalid number, try again");
            else
                throw e;
        }    
}

console.log(reliableMultiply(8, 8));