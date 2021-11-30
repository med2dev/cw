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

// non regex implementation

function removeNoRegex(string){
    while (s && s.slice(-1) == '!'){
        s = s.slice(0, -1)
    }
    return s
}