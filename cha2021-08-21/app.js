// P: a, b, logical expressions
// R: boolean, a xor b, that is, true when exactly one of the two expressions is true

// E:
xor(true, true) // false
xor(true, false) // true
xor(false, true) // true
xor(false, false) // false

function xor(a, b){
    return (a && !b) || (!a && b)
}

function xor2(a, b){
    // xor is true exactly when a and b are logical and different
    if (typeof(a) == typeof(b) && typeof(a) == 'boolean'){
        return a != b
    } else {
        throw 'Parameter is not boolean'
    }
}