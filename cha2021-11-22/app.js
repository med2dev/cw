// P: 3 numbers, a, b, c
// R: the solution for n, such that n *(a * b / 100) = c

// E: 
dutyFree(12, 50, 1000) // 166
dutyFree(17, 10, 500) // 294
dutyFree(24, 35, 3000) // 357

function dutyFree(a, b, c){
    return Math.floor(c * 100 / (a * b))
}