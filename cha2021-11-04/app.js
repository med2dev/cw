// P: an array, a, and a value, x
// R: Boolean, whether the array contains the value x

// E:
check([66, 101], 66) // true
check([101, 45, 75], 107) // false
check(['t', 'e', 's', 't'], 'e') // true

// this is implemented as Array.prototype.includes()
function check(a, x){
    return a.includes(x)
}