// P: two booleans, a and b
// R: is a true and b false

// E:
setAlarm(true, false) // true
setAlarm(true, true) // false
setAlarm(false, false) // false
setAlarm(false, true) // false

function setAlarm(a, b){
    return a && ! b
}