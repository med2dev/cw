// P: a number, n 
// R: the number of positive odd integers less than n

// E:
oddCount(7) // 3
oddCount(15) // 7

// Edge cases:
// will n ever be < 2? 
// will n be a float, or are only integers allowed?


function oddCount(n){
    // the number of positive integers less than n are n - 1
    // if n is even, there are n/2 odd integers less than n
    // if n is odd, there are (n - 1)/2 odd integers less than n
    // in any case, there are Math.floor(n/2) odd integers less than n
    // Walk this through, so given n = 7, 7/2 = 3.5, with floor 3
    return Math.floor(n/2)
}

// fancy syntax for practice
const oddCount = n => Math.floor(n/2)