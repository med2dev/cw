// P: three integers from 1 - 10
// R: the largest value that can be produced using 
//      addition, multiplication, and parentheses

// E:
expressionMatter(2, 1, 2) // 6
expressionMatter(2, 1, 1, ) // 4


function expressionMatter(a, b, c){
    // filter the ones
    const ones = [a, b, c].filter(element => element == 1)
    // sort the remaining
    const moreThanOnes = [a, b, c].filter(element => element > 1).sort((a, b) => a - b)
    if (ones.length == 3) return a + b + c
    if (ones.length == 2) return 2 * moreThanOnes[0]
    if (ones.length == 1) return (1 + moreThanOnes[0]) * moreThanOnes[1]
    return a * b * c
}