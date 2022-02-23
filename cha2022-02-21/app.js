// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(n){
    const responses = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return responses[(n % 6) - 1] || 'not at all'
}

// note the || solution 
// here we want to use a count as an index, where we allow counts > the length of the index to find 
// the value that would recycle to that position 
// This is simply solved by using a remainder EXCEPT for languages (like JS) where the index position
// -1 is undefined
// the current experimental method Array.prototype.at() resolves this by implementing negative indices
// But as it is, we need a work around
// this is the work around. We know if the value at the calculated index is undefined, then we 
// actually want the last element
// the idiom return A || B will give us B when A is falsy, and undefined is falsy

// alternate where arr.at() is implemented
function howMuchILoveYou(n){
    const responses = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return responses.at((n % 6) - 1) // Array.at(-n) returns the element n + 1 from the end
}