// P: intensity, the intensity of a sound wave 
// R: the decibel scale value of that intensity

// E:
dbScale(Math.pow(10, -11)) // 10


// readable

function dBScale(intensity){
    // divide by threshold of human hearing
    const adjustedIntensity = intensity / Math.pow(10, -12)
    // take the log for Bel scale
    const belScale = Math.log10(adjustedIntensity)
    // multiply by 10 for decibels
    return 10 * belScale
}

// oneliner
const dBScale = i => 10 * Math.log10(i / Math.pow(10, -12))