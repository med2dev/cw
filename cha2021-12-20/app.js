// P: array
// R: the array with an additional item, an integer
//      add whatever integer you would like, but DO NOT MUTATE THE INPUT

// E:
addExtra([1, 2, 3]) // [1, 2, 3, 13], but input isn't mutated

function addExtra(arr){
    // use the spread operator
    return [...arr, 13]
}

// learning objective:
// to make a deep copy of an array, use the spread operator
// you can also add additional elements when you do this