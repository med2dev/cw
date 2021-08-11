// P: a float in miles per gallon
// R: a float in km per liter
//      round to 2 decimal places
//      but do not return trailling 0s

// relationships:
// 1 gallon = 4.54609188 liters
// 1 mile = 1.609344 km

function converter(mpg){
    const kpL = mpg * 1.609 / 4.546
    return Number(kpL.toFixed(2))
}