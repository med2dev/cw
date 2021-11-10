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
    // generate the range
    const arr = Array.from({length:n}, (v,i) => i + 1)
    // sum the array
    return arr.reduce((p, c) => p + c, 0)
}

function altsummation(n){
    let result = 0
    for (i = 0; i < n; i++){
        result += 1
    }
    return result
}