// P: 3 positive integers, n, x, y
// R: Boolean, is n divisble by both x and y

// E: 
isDivisible(3, 3, 4) // false
isDivisible(12, 3, 4) // true



function isDivisible(n, x, y){
    // n is divisible by x if the remainder is 0
    // check the remainder for both n / x and n / y
    return !(n % x) && !(n % y)
}