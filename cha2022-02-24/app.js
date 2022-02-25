// P: a string containing zero or more spaces

// R: a string, containing the same number of words (space separated nonspace characters)
//    where each word is replaced with 'ruff'

// E: 
dogTranslator("") // ""
dogTranslator("hello") // "ruff"
dogTranslator("This is a test") // "ruff ruff ruff ruff"


// P:
function dogTranslator(s){
    return s.replace(/\S+/g, 'ruff' )
}