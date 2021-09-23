// P: a string
// R: Boolean, does the string contain the substring 'English', case insensitive

// E:
spEng("eNglisH") // true
spEng('egnlish') // false

function spEng(sentence){
    return Boolean(sentence.match(/english/i))
}