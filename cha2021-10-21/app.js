// P: two integers, bullets, dragons
// R: boolean, are the enough bullets to kill the dragons, given each dragon
//      requires two bullets

// E:
hero(10, 5) // true
hero(7, 4) // false

function hero(bullets, dragons){
    return bullets >= dragons * 2
}