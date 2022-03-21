// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

// P:   name, a string
//      price: a positive integer (per the examples), with a default value of 30

// R:   the length of the string, times the price
// Bizarre constraint: don't use the '*' operator

// E:   
billboard("Jeong-Ho Aristottelis") // 600
billboard("Hadufuns John", 20) // 260

function multiply(a, b){
    const arr = new Array(b)
    arr.fill(a)
    return arr.reduce((previous, current) => previous + current)
}

function billboard(name, price = 30){
    return multiply(name.length, price)
}

// refactor
function billboard(name, price = 30){
    // start with 0
    // this ignores the value in [...name], and simply adds price name.length times
    return [...name].reduce(previous => previous + price, 0)
}

// example of [...string] to be able to use some array methods that
// aren't defined for a string