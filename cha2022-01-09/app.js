// P: none. A string method
// R: a string with the case of each character reversed

// E:
'hello world'.toAlternatingCase() // "HELLO WORLD"

String.prototype.toAlternatingCase = function() {
    // detect whether a substring is upper or lower case
    // replace it with the opposite
    const reverseCase = function(c){
        return /[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase()
    }
    const arr = this.split('')
    const alternateArr = arr.map(reverseCase)
    return alternateArr.join('')
}