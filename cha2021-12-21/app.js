// P: a string of digits
// R: a string with every digit below 5 replaced with 0 and every digit 5 or 
//      above replaced with 1

// E:
fakeBin('45') // '01'


function fakeBin(x){
    // P: this calls for map
    // spread x so you can use the array method
    // map each digit of x to '0' if it is less than 5, '1' if it is not
    return [...x].map(e => Number(e) < 5 ? '0' : '1'),join('')
}