// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

// P: an integer, tests appear to all be positive
// R: boolean
// Where p is the number of digits, is the integer, n, equal to the sum of each digit raised to the power p


function isNarcissistic(n){
    const s = String(n)
    const p = s.length
    let powerSum = 0
    for (let i = 0; i < p; i++){
      powerSum += s[i]**p
    }
    return powerSum == n
}

// refactor using reduce

function isNarcissisticReduce(n){
    const s = String(n)
    const digits = s.split('')
    return digits.reduce((previous, current, index, array) => previous + current**array.length, 0)
}