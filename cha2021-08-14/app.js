// P: an array, numbers, and an integer, divisor
// R: an array containing those elements in numbers that are divislbe by divisor

// E:
divisibleBy([1,2 , 3, 4, 5, 6], 2) // [2, 4, 6]


function divisibleBy(numbers, divisor){
    return numbers.filter(v => v % divisor == 0)
}