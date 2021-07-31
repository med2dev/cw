// P: a number, x
// R: if x is a number, 50 * x + 6
//    if x is a string, 'Error'

// E:
problem(5) // 256
problem('5') // 'Error'

function problem(x){
    return typeof(x) == 'number' ? 50 * x + 6 : 'Error'
}