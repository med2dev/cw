// P: an array of integers
// R: the minimum value

const { maxHeaderSize } = require("http")

// E: 
min([-2, 4, 2, -7, 3]) // -7

// P: this is a builtin Math method, you just need to use spread notation
const min = arr => Math.min(...arr)

// Max works exactly the same
// P: an array of integers
// R: the maximum value


// E:
max([-2, 4, 2, -7, 3]) // 3

const max = arr => Math.max(...arr)