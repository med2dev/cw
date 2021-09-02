// P: a nested array representing the steps a monk has climbed every day for a year, 
//      nested by day of the week
// R: the sum of all the steps climbed in a year * 20 (representing expectation 
//      of the number of steps climbed in 20 years)

// E:
stairsIn20([[1, 2], [3, 4], [5, 6]]) // 21

function stairsIn20(steps){
    // flatten
    const flattened = steps.flat()
    // reduce and multiply by 20
    return flattened.reduce((p, c) => p + c) * 20
}