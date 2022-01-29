// PREP

// P:
//      water: number (appears to be positive integer only in tests)
//      load: number (again, appears to be positive integer only)
//      clothes: numbrer (again, appears to be positive integer only)

// R:   either number, a float rounded to 2 decimal places, equal to
//          water * 1.1^(load - clothes)
//      or
//      string, either 'Too much clothes' or 'Not enough clothes'
//      if clothes > 2*load, return 'Too much clothes'
//      if clothes < load, return 'Not enough clothes'

function howMuchWater(water, load, clothes){
    // validate input
    if (clothes > 2*load){
        return 'Too much clothes'
    } else if (clothes < load){
        return 'Not enough clothes'
    } else {
        let res = water * 1.1**(clothes - load)
        return Math.round(res * 100)/100
        // or res.toFixed(2)
    }
}