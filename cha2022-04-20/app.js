// P:   an array of strings representing types of birds, birds
// R:   an array of strings those birds that are geese removed
//      geese:
//      ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// E:
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", 
"Toulouse", "Blue Swedish"])
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

function gooseFilter(birds){
    // finding the elements in one array that are not in another is a simple
    // set operation. However, to pass the tests, it looks like we'll need to 
    // retain the order. So it may be best to simply loop through the array.
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    const notgeese = []
    birds.forEach( element => {
        if (! geese.includes(element)) notgeese.push(element)
    })
    return notgeese
}

// refactor using Array.filter
function gooseFilterUseFilter(birds){
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(element => ! geese.includes(element))
}

// filter here uses a filter function that returns all elements of an array
// for which the filter function is true