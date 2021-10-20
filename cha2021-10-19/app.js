// P: a number, p
// R: Boolean, is it a Wislon prime
//      e.g., does the input solve the condition, ((p-1)! + 1)/(p*p) is a whole number

// E:
amIWilson(5) // true
amIWilson(9) // false

// factorial
function factorial(n){
    // create an array of consecutive positive integers from 1 to n
    const arr = Array.from({length:n}, (v, i) => i + 1)
    // reduce with multiplication
    return arr.reduce((p, c) => p * c)
}

function amIWilson(p){
    // generate the value in the expression
    const val = (factorial(p - 1) + 1) / (p * p)
    // test for a whole number
    return Math.floor(val) == val
}