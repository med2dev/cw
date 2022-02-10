// PREP

// Parameters:
//      n, a number, either 0, a float between 0 and 1, a positive integer, or Infinity

// Return:
//      boolean, true if that number of things would be plural in english, false if it wouldn't
//      simplification, it is only false if the value is 1

// Examples:
plural(0) // true
plural(0.5) // true
plural(1) // false
plural(100) // true
plural(Inifinity) // true

function plural(n){
    return n == 1 ? false : true
}

// It looks like you used the ternary operator to reinforce the syntax for a return, but
// remember, you're looking for a boolean return value, so you don't need to convert the
// test into some other thing. Just return the test that produces the boolean you're after

function betterSolution(n){
    return n !== 1
}