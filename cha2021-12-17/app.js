// P: s, a string
// R: a string, with the first and last characters removed

// E:
removeChar('eloquent')  // 'loquen'

function removeChar(str, trim = 1){
    return str.substring(trim, str.length - trim)
}

// slice implementation
function removeChar(str, trim = 1){
    return str.slice(trim, -1 * trim)    
}
