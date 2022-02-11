// PREP

// P:
//  string
// R:
//  string, with numeric characters removed

// E:
stringClean("123456789") // ""
stringClean("E3at m2e2!!!") // "Eat me!!!"

function stringClean(s){
    // replace, using regex digit pattern
    return s.replace(/\d/g, '')
}