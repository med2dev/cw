// P: two positive integers, n, m
// R: an integer, the sum of all multiples of n less than m
//      if parameters are invalid (not positive integers), return string "INVALID"

// E:
sumMu(2, 9) // 20
sumMu(2, 4) // 2
sumMu(4, -7) // "INVALID"

function sumMu(n, m){
    // handle invalid arguments
    if (n < 1 || m < 1) return "INVALID"

    // generate the multiples
    // the number of multiples less than or equal to m is the quotient m / n
    // Here, m isn't included, e.g., n = 2, m = 4
    // so use m - 1
    // the values are (index + 1) * n
    const arr = Array.from({ length: Math.floor((m - 1) / n) }, (v, i) => (i + 1) * n)

    // sum
    return arr.reduce((p, c) => p + c)
}
