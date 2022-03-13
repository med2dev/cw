// P: a string containing two words, where words are separated by a space
// R: a string, with those two words swapped in order

// E:
nameShuffler('john McClane') // 'McClane john'

function nameShuffler(name){
    const [firstName, lastName] = name.split(' ')
    return [lastName, firstName].join(' ')
}