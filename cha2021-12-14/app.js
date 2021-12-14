// P: a string that contains spaces. 
// R: a string, with the words (space spearated substrings) in reverse order


// E: 
reverseWords('hello world!') // 'world! hello'

function reverseWords(s){
    // P:
    // split the string into an array of words
    const words = s.split(" ")
    // reverse the array and join it
    return words.reverse().join(' ')
}

// one liner
const reverseOneLiner = s =>s.split(" ").reverse().join(" ")