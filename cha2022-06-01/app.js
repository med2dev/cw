// P: n, a rational number (float or integer)
// R: logical, whether the number is even
//    note, a noninteger cannot be even

// E:
testEven(2) // true
testEven(3) // false
testEven(2.01) // false

function testEven(n){
    return ! (n % 2)
}