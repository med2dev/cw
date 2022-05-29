// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years

// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that


// Dog Years

// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// P: positive integer
// R: an array, containing the input, and the results of two separate algorithms as described above


// E:
humanYearscatYearsDogYears(1) // [1, 15, 15]
humanYearscatYearsDogYears(2) // [2, 24, 24]
humanYearscatYearsDogYears(10) // [10, 56, 64]

function humanYearsCatYearsDogYears(humanYears){
    if (humanYears == 1){
        return [1, 15, 15]
    } else if (humanYears == 2){
        return [2, 24, 24]
    } else {
        catYears = 24 + (humanYears - 2)*4
        dogYears = 24 + (humanYears - 2)*5
        return [humanYears, catYears, dogYears]
    }
}