// P: array of boolean values and a string representing a logical operation,
//      either 'AND', 'OR', or 'XOR'
// R: single boolean value representing sequential application of the operator
//      to the values in the array
//      the result of the prior application of the operator is used in the next
// E:
logicalCalc([true, false, true], 'XOR') // false
// first we run the operation with the first two values: true xor false
// this gives us the result: true
// the next set is the result of the previous operation (true), and the THIRD
// value: true xor true
// this gives the result: false


function logicalCalc(array, op){
    // define functions for reduce
    const AND = (x, y) => x && y
    const OR = (x, y) => x || y
    const XOR = (x, y) => x != y
    // choose operation
    const f = op == 'AND' ? AND : op == 'OR' ? OR : XOR
    // sequential operations described in the requirements is used by reduce
    return array.reduce(f)
}

// you could simply evaluate op rather than assign it to f

function logicalCalcDanger(array, op){
    const AND = (x, y) => x && y
    const OR = (x, y) => x || y
    const XOR = (x, y) => x != y
    return array.reduce(eval(op))
}

// but, of course, that's a security risk

// alternatively, you could put the functions in an object that op can index

function logicalCalcBetter(array, op){
    reducers = {
        'AND' : (x, y) => x && y,
        'OR' : (x, y) => x || y,
        'XOR' : (x, y) => x != y
    }
    return array.reduce(reducers[op])
}