// P: n, a positive integer
// R: an array from 1 to n

// E: 
preFizz(1) // [1]
preFizz(4) // [1, 2, 3, 4]

function preFizz(n){
    return Array.from({length: n}, (v,i) => i + 1)
}