// P: n, an integer, the number of times a hula hoop goes around
// R: a message, based on the number, as follows

//      10 or more: 'Great, now move on to tricks'
//      < 10:       'Keep at it until you get it'

// E:
hoopCount(3)  // 'Keep at it until you get it'
hoopCount(11) // 'Great, now move on to tricks'

function hoopCount(n){
    return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'
}