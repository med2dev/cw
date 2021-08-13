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

}