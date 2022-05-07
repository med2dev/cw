// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.


// Constraints
// 0 <= input.length <= 100

// PREP

// Parameters:
//  a string of length 0 to 100, containing parens

// Return:
//  boolean, true if every open parens is followed by a matching closing paren, and every closing paren follows a matching opening paren

function validParentheses(parens){
    // return true if empty
    if (parens.length == 0){
        return true
    }
    // get the index value for each open and the index value for each close
    const open = new Array()
    const reOpen = /\(/g
    while (openMatch = reOpen.exec(parens)){
        open.push(openMatch.index)
    }

    const closed = new Array()
    const reClosed = /\)/g
    while (closedMatch = reClosed.exec(parens)){
        closed.push(closedMatch.index)
    }
    // each array of index values should be the same length
    if (closed.length != open.length){
        return false
    } else {
            // and each element of open should be less than the corresponding element of closed
        return open.every((v, i) => open[i] < closed[i])
    }

}

// Examples:
validParentheses("()")                  // true
validParentheses(")(()))")              // false
validParentheses("(")                   // false
validParentheses("(())((()())())")      // true
validParentheses("")                    // true