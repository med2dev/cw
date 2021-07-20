// P: an array of positive integer, arr, and a nonneative integer, n

// R: the nth element of arr raised to the nth power
//      if there is no nth element, return -1

// E:
index([1, 2, 3, 4], 2) // 9
index([1, 2, 3, 4], 4) // -1

function index(arr, n ){
    return arr[n] ** n || -1
}