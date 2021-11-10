// P: positive integer, n
// R: sum of 1 to n

// E:
summation(2) // 3
summation(8) // 36


function summation(n){
    // P:   sum of consecutive integers is 
    //      n(last + first)/2
    // here: n(n+1)/2
    return n * (n + 1) / 2
}

// actual sum implementation

function fullSummation(n){
    const arr = Array.from({length:n}, (v,i) => i + 1)
    return arr.reduce((p, c) => p + c, 0)
}