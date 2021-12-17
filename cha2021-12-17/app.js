// P: s, a string
// R: a string, with the first and last characters removed

// E:
removeChar('eloquent')  // 'loquen'

function removeChar(str){
    return str.substring(1, str.length - 1)
}

