// P: Two integers
// R: Boolean, is the first divisble by the second

// E:
checkForFactor(10, 2) // true

function checkForFactor(base, factor){
    return ! (base % factor)
}