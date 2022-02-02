//PREP

// In a one-dimensional ocean, will the shark reach you before you get to the pontoon or not

//P
// A set of nonnegative numbers, all integers in the examples
//  pontoonDistance
//  sharkDistance (from the pontoon)
//  youSpeed
//  sharkSpeed

// and a boolean:
//  dolphin (if true, half the value of sharkSpeed)

// R
//  string, 'Alive!' or 'Shark Bait!'

// E
shark(12, 50, 4, 8, true) // 'Alive!'
shark(7, 55, 4, 16, true) // 'Alive!'
shark(24, 0, 4, 8, true) // 'Shark Bait!'

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    // adjust sharkSpeed for presence of dolphin
    const adjSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed
    // calculate the time for you to make it to the pontoon
    const youTime = pontoonDistance / youSpeed
    // calculate the time for the shark to make it to the pontoon
    const sharkTime = sharkDistance / adjSharkSpeed
    // return true or false, where your time is less than the shark's time 
    return youTime < sharkTime ? 'Alive!' : 'Shark Bait!'
}