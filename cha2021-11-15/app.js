// P: string, one of 'green', 'yellow', or 'red', representing a traffic light
// R: string, the next color of traffic light

// E:
updateLight('green') // 'yellow'

function updateLight(current){
    // create an object with key: current color, value: next color
    const nextLight = {
        green: 'yellow',
        yellow: 'red', 
        red: 'green'
    }
    // index object to get the next collor
    return  nextLight[current]
}

// logic solution

function updateLightLogic(current){
    // if it's green make it yellow, if not, is it yellow? make it red. if not, make it green
    return current == 'green' ? 'yellow' : current = 'yellow' ? 'red' : 'green'
}