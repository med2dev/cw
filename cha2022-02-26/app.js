// P: string containing a binary representation of a number
// R: integer, decimal representation of the same number

// E:
binToDec('1') // 1
binToDec('0') // 0
binToDec("1001001") // 73

function binToDec(bin){
    let res = 0
    bin.split("").reverse().forEach((e,i) => res+= e * 2**i)
    return res
}

// note, there is a builtin
// parseInt

function binToDec(bin){
    return parseInt(bin, 2)
}