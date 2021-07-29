// P: an array of non negative integer IDs
// R: the samllest unused ID

// E:
nextId([0, 1, 2, 3, 5]) // 4
nextId([0, 1, 2, 3, 4, 5, 6]) // 7

function nextId(ids){
    // remove duplicates
    const setIds = new Set(ids)
    // sort 
    const sortedIds = [...setIds].sort((a, b) => a - b)
    // filter array for values that are equal to their index
    return sortedIds.filter((e, i) => e == i).pop() + 1 || 0
    // add one to the last

}

