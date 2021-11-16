// P: Two integers
// R: Boolean, is the first divisble by the second

// E:
checkForFactor(10, 2) // true

function checkForFactor(base, factor){
    // logical test
    // if the remainder of the base divided by the factor is 0
    // then factor is in fact a factor of base
    // 0 is falsey. 
    // so invert
    return ! (base % factor)
}