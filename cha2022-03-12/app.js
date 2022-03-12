// P: a string, with letters only, from 1 to 10 characters
// R: that string, capitalized

// E:
capitalizeWord('word') // 'Word'

function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1)
}

// with one argument, substring extracts from that index to the end