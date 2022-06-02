// P: two string representations of integers
// R: a string representation of the sum of those integers

// E:


function sumStr(a, b){
    // coerce to number
    const numA = Number(a)
    const numB = Number(b)
    // sum and coerce back to string
    const result = String(numA + numB)
}

// one liner
const sumStrOneLiner = (a, b) => String(Number(a) + Number(b))