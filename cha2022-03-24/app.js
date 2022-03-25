// P: two real numbers, a, b
// R: the product of those numbers

// E: 
multiply(2, 3) // 6

// * operator (learning objective: function definition syntax)
const multiply = (a, b) => a * b

// summing a b times
function multiply(a, b){
    let res = 0
    for (i == 0; i < b; i++){
        res += a
    }
    return res
}

// array method
function multiply(a, b){
    const arr = Array(b)
    arr.fill(a)
    return arr.reduce((previous, current) => previous + current)
}