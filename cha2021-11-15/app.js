// P: string, one of 'green', 'yellow', or 'red', representing a traffic light
// R: string, the next color of traffic light

// E:
updateLight('green') // 'yellow'

function updateLight(current){
    const nextLight = {
        green: 'yellow',
        yellow: 'red', 
        red: 'green'
    }
    return  nextLight[current]
}