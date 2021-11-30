// P: a string that may terminate  with exclamation marks
// R: the string with terminating exclamation marks removed

// E:
remove("Hi!") // "Hi"
remove("Hi!!!") // "Hi"
remove("Hi") // "Hi"


function remove(string){
    // regex replace
    string.replace(/!*$/g, '')
}