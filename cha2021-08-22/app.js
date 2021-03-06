// P: two strings, representing a beast and a dish for a feast
// R: Boolean, are the first and last letters of the beast the same as
//      the first and last letters of the dish

// E:
feast('abc', 'azc') // true
feast('lion', 'lemon') // true
feast('zebra', 'taco')  // false

function feast(beast, dish){
    return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
}