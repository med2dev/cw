// P: 3 integers, a, b, c, with c a nonnegative integer that defaults to 0
// R: -1, 0, or 1, based on the following comparisons
//      c is a margin that defines 'close to'
//      if a is close to b, return 0
//      if a > b and not close to b, return 1
//      if a < b and not close to b, return -1

// E:
closeCompare(4, 5) // -1
closeCompare(4, 5, 2) // 0
closeCompare(8, 5, 2) // 1

function closeCompare(a, b, c = 0){
    if (a < (b - c)){
        return -1
    } else if (a > b + c){
        return 1
    } else {
        return 0
    }
}