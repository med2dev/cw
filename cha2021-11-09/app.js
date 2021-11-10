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
    // initialize the result
    let result = 1
    // loop from 0 to 1 less than n, by 1
    for (i = 0; i < n; i++){
        // add i to the result
        result += i
    }
    return result
}