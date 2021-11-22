// P: 3 numbers, a, b, c, representing the retail price, discount, and 
//      a total cost to defray
// R: the solution for the number of items to buy at discount
//    such that the total savings off retail is equal to the total
//    cost to defray

// This is the solution for n, where n *(a * b / 100) = c

// E: 
dutyFree(12, 50, 1000) // 166
dutyFree(17, 10, 500) // 294
dutyFree(24, 35, 3000) // 357

function dutyFree(a, b, c){
    return Math.floor(c * 100 / (a * b))
}