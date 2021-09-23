// P: a string
// R: Boolean, does the string contain the substring 'English', case insensitive

// E:
spEng("eNglisH") // true
spEng('egnlish') // false

function spEng(sentence){
    return Boolean(sentence.match(/english/i))
}

// test is what you actually want here

function spEngTest(sentence){
    return /english/i.test(sentence)
}