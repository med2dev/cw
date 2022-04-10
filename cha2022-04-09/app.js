// P:   d, a string, either 'R' or 'L'
//      an array of integers

const { fileURLToPath } = require("url");

// R:   an array, the input array sorted in either ascending or descending order,
//      based on the value of d. If d is 'R', ascending, 'L', descending

// E: 
flip('R', [3, 2, 1, 2]) // [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5]) // [5, 5, 4, 3, 1]

function flip(d, a){
    // assign the ordering function based on the value of d
    const orderFun = d == 'R'? (a, b) => a - b : (a, b) => b - a
    // sort according to the order function, and return
    return a.sort(orderFun)
}
