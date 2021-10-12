// P: Boolean value
// R: String, 'Yes' for true, 'No' for false

// E:
boolToWord(true) // 'Yes'
boolToWord(false) // 'No'

function boolToWord(bool){
    // if bool is true, return 'Yes', else 'No'
    return bool ? 'Yes' : 'No'
}

function booltoWordSwitch(bool){
    // switch implementation
    // switch(expression)
    switch (bool){
        // case value: do something
        case true: return 'Yes'
        // as many cases as you please
        // then default: do something
        default: return 'No'
    }
}

