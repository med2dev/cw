// P: Boolean value
// R: String, 'Yes' for true, 'No' for false

// E:
boolToWord(true) // 'Yes'
boolToWord(false) // 'No'

// ternary operator implementation
function boolToWord(bool){
    // if bool is true, return 'Yes', else 'No'
    return bool ? 'Yes' : 'No'
}

// switch implementation
function booltoWordSwitch(bool){
    // switch(expression)
    switch (bool){
        // case value: do something
        case true: return 'Yes'
        // as many cases as you please
        // then default: do something
        default: return 'No'
    }
}

// full ifelse implementation
function booltoWordIfElse(bool){
    // standard ifelse syntax
    if (bool){
        return 'Yes'
    } else {
        return 'No'
    }
}

// abbreviated ifelse implementation
function boolToWordAbbrev(bool){
    // one line doesn't require curly braces
    if (bool) return 'Yes'
    // no else needed. if above expression runs, function returns and exits stack
    // if the function hasn't returned, if hasn't triggered, and you return 'No'
    return 'No'
}