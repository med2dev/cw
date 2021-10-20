// P: two positive integers, the age of a father and son
// R: the number of years ago the father was twice as old as his son
//      or, in how many years

// E:  
twiceAsOld(55, 30) // 5
twiceAsOld(42, 21) // 0
twiceAsOld(29, 0) // 29

function twiceAsOld(dad, son){
    // this condition is met when the son is the age the dad was when born
    const dadWhenSonBorn = dad - son
    return Math.abs(son - dadWhenSonBorn)
}