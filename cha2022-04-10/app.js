// P: two integers, f1, f2
// R: logical, if one of the inputs is odd and the other even, true. otherwise false
// note: discrete math, this reduces to the sum of the two numbers is odd

// E:
lovefunc(1, 4) // true
lovefunc(2, 2) // false

function lovefunc(f1, f2){
    return Boolean((f1 + f2) % 2)
}