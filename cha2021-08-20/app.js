// debug challenge
// P: an array
// R: no return. swap the first and last element of the array as a side effect


function swapValues() {
    var args = arguments[0]
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}