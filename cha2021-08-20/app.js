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

// as a side effect, arr now has swapped values

// How does this work despite not modifying arr directly? 
// It appears the argument object contains a reference to the same object in
// memory that is passed as an argument. It is a shallow copy. 

// Because it is passed as an argument, it doesn't need to be a global variable
// see:
let anotherArr = [1, 3]
swapValues(anotherArr)
anotherArr // [3, 1]

// do we even need to use the arguments object? What if we provide a parameter?
function swapValues2(a){
    let temp = a[0]
    a[0] = a[1]
    a[1] = temp
}

anotherArr = [1, 3]
swapValues2(anotherArr)
anotherArr // [3, 1]

// No, the behavior of arguments as references to the same object in memory
// does not depend on using the arguments object

// SO, there are two learning objectives here:
// 1. There exists an arguments object that is accessible inside functions
//      It is indexible and has a length property, but otherwise does not have
//      access to array methods unless you assign it to an array in the
//      function body

// 2. Arguments are shallow copies. If you mutate the input, that will be 
//      a side effect. Here, that's a desired behavior. In other cases it
//      