// P: the average velocity of an object
// R: the time that object will take to travel 400 units of length
//      if the velocity is negative, return 0
// E:

sakuraFall(5) // 80
sakuraFall(10) // 40
sakuraFall(-1) // 0

function sakuraFall(v){
    return v > 0 ? 400 / v : 0
}   