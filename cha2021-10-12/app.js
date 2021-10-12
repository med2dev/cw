// P: Boolean value
// R: String, 'Yes' for true, 'No' for false

// E:
boolToWord(true) // 'Yes'
boolToWord(false) // 'No'

function boolToWord(bool){
    // if bool is true, return 'Yes', else 'No'
    return bool ? 'Yes' : 'No'
}