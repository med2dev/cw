// PREP
// P: nonnegative integer
// R: array, with digits reversed

// E:
digitize(348597) // [7, 9, 5, 8, 4, 3]

function digitize(n){
    // convert to a string, then array
    // reverse the array
    // then convert back to number
    return [...String(n)].reverse().map(Number)
}

// note that you don't need to make element explicit when passing a single unary function
// arr.map(e => Number(e)) is equivalent to arr.map(Number)