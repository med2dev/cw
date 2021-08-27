// P: min, max, step, integers 
// R: an array, from min to max by step
//      return value may include max if step lands on max

// E:
generateRange(2, 10, 2) // [2, 4, 6, 8, 10]

function generateRange(min, max, step){
    // standard range implementation
    // construct array from the length (automagically truncates to integer)
    // a range starts with the min (thats 1)
    // and then has the quotient (max - min) / step additional values
    
    // generate the values
    // the first one is min
    // then add step 
    // to do this, use min + i * step
    return Array.from({length: (max - min) / step + 1}, (v, i) => min + i*step)
}