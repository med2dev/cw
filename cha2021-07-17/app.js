// P: a possible representation of a number
// R: a float if coercion to number is possible, null otherwise

// E:
parseF('1') // '1.0'

// really, this challenge is asking you to convert a builtin to a custom
// function by slightly altering the behavior
// turn NaN into null
// This requires knowing how to test for NaN
function parseF(s){
    const floated = parseFloat(s)
    return isNaN(floated) ? null : floated
}