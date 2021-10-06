// P: three integers, number, a, and b
// R: Boolean, is number divisible by both a and b

// E:
isDivideBy(-12, 2, -6) // true
isDivideBy(45, 1, 6) // false

function isDivideBy(number, a, b){
    return ! (number % a ) && ! (number % b)
}