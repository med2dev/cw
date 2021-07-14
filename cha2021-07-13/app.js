// P: an array of numbers
// R: the sum, with an empty array returning 0

// E:
sum([]) // 0
sum([2, -4, 3.2]) // 1.2

function sum(numbers){
    return numbers.reduce((p, c) => p + c, 0)
}