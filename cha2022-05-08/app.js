// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// PREP

// P: any real number (integer or float)
// R: return a negative number with the same magnitude

function makeNegative(num){
    // Pseudocode:
    // take the absolute value of num, and make it negative
    return -Math.abs(num)
}

// E:

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
