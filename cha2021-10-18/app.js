// P: a string, that may include exclamation points
// R: the string, witht he exclamation points removed, except with one at the end

// E:
remove("Hi!") // Hi!
remove("Hi!!!") // Hi!
remove("!Hi") // Hi!

function remove(string){
    return string.replace(/!/g, '') + '!'
}