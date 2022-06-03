// P: a string representation of a hexadecimal representation of a number

// R: an integer, the decimal representation of the number input

// E: 
hexToDec("1") // 1
hexToDec("FF") // 255


function hexToDec(hexString){
    // object with decimal values for hex digits
    const hexvals = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'a': 10,
        'b': 11,
        'c': 12,
        'd': 13,
        'e': 14,
        'f': 15
    }
    // convert string to lowercase, separate characters to an array
    let hexArr = hexString.toLowerCase().split('')
    // reverse array, so that digits are in increasing order
    hexArr = hexArr.reverse()
    // initialize value at 0
    let res = 0
    // extract the decimal value of each digit and multiply it by the place
    hexArr.forEach((e, i) => {
        res += (hexvals[e] * Math.pow(16, i))
    })
    return res
}