// debug challenge
// P: an array
// R: that array, with the first and last element swapped

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}