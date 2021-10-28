// P:  three strings, operation, value1, value2
//      operation is one of '+', '-', '*', '/'
//      value1 and value2 are numbers, the operands
//      for the operation

// R: the value of the operation
basicOp('+', 4, 7) // 11

function basicOp(operation, value1, value2){
    // eval is a security risk, but it will do the job for this
    // challenge
    return eval(`${value1} ${operation} ${value2}`)
}

