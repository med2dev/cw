// P: an array of numbers
// R: an array, with those values that are character codes for 
//      lowercase vowels converted to lowercase vowels

// E:
isVow([118, 117]) // [118, 'u']


function isVow(a){
    // P: map
    const vowelPoints = [97, 101, 105, 111, 117]
    return a.map((e, i, a) => vowelPoints.includes(e) ? String.fromCodePoint(e) : e)
}