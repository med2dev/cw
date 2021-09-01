// P: array of strings
// R: the first element, when the array is sorted alphabetically, with 
//      *** interpolated between each letter
//      note: do not change the input

// E:
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) // 'b***i***t***c***o***i***n'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) // 'a***r***e'

function twoSort(s){
    let copy = [...s]
    const sorted = copy.sort()
    let first = sorted[0]
    return first.split('').join('***')
}