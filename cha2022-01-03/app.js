// P: string, that may or may not terminate in an exclamation point
// R: string, with the terminal exclamation point removed, if it exists

// E:
remove("Hi!") // "Hi"
remove("Hi!!!") // "Hi!!"
remove("Hi") // "Hi"
remove("!Hi") // "!Hi"

function remove(str){
    return str[str.length - 1] == "!" ? str.substring(0, str.length - 1) : str
}