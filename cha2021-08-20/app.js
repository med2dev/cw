// debug challenge
// P: an array
// R: no return. swap the first and last element of the array as a side effect

// as this is used, a global variable, arr, is assigned, then passed as an argument 
//  to swapValues
//  note: this is not really best practice

// E:
var arr = [1, 2]
swapValues(arr)
arr // [2, 1]

function swapValues() {
    // the arguments object is indexible and has a length property
    let args = arguments[0]
    // assign the first element of the argument to a temp variable
    let temp = args[0];
    // give the second value of the array to the first position
    args[0] = args[1];
    // give the second position the value of your temp variable
    args[1] = temp;
    // nothing is returned
}

// as a side effect, the global variable arr now has swapped values