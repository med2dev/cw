// P: an array of strings, containing one 'wolf' with the remaining elements 
//  'sheep'
// R: a string, based on the following decision rule
//  sheep are numbered from the end to the beginning, with the last sheep in 
//  the array being 1, second to last being 2
//  
//      if the wolf is the last element in the array, return:
//      'Pls go away and stop eating my sheep'
//      Otherwise, return:
//      'Oi! Sheep number N! You are about to be eaten by a wolf!'
//      where N is the sheep number

// R:
warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']) // 'Oi! Sheep number 2! You are about to be eaten by a wolf!'


function warnTheSheep(queue){
    // find the index position of the wolf element
    const wolfIndex = queue.findIndex('wolf')
    // add one to find the sheep index
    const sheepIndex = wolfIndex + 1
    // subtract the array length to find the sheep number according 
    // to the numbering system described above
    const sheepNumber = queue.length - sheepIndex
    // if it's 0, return the first message
    // otherwise, return the sheep warning message
    return sheepNumber > 0 ? `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep'
}