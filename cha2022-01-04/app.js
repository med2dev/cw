// P:   two integers, h, l, representing the number of heads and legs on a farm
//      
// R:   an array, the number of chickens and cows that would produce that number of heads and legs
//      in the form [a, b], where a represents the chickens and b the cows
//      If no number of chickens and cows can produce that number of heads and legs,
//          return the string "No solutions"

// Edge cases:
//      for [0, 0], this has a solution, and the solution is [0, 0], there are no chickens or cows
//      for negative numbers of heads or legs, this has no solution, so
//          return the string "No solutions"

// E:
animals(2, 6) // [1, 1]
animals(1, 5) // "No solution"

function validAnimal(n){
    return n >= 0 && Math.floor(n) == n
}

function animals(heads, legs){
    // P: this is two linear equations in two variables
    //    simplify
    const chickens = 2 * heads - legs / 2
    const cows = heads - chickens
    // a valid result has a solution with a nonnegative value for both
    return validAnimal(cows) && validAnimal(chickens) ? [chickens, cows] : 'No solutions'

}