// P: an array of numbers
// R: an array, with those values that are character codes for 
//      lowercase vowels converted to lowercase vowels

// E:
isVow([118, 117]) // [118, 'u']


function isVow(a){
    // P: map
    // define an array containing code points for lowercase vowels
    const vowelPoints = [97, 101, 105, 111, 117]
    // map each element of the array, if it's a vowel code point, to the vowel,
    //      otherwise, leave it alone
    return a.map((e, i, a) => vowelPoints.includes(e) ? String.fromCodePoint(e) : e)
}