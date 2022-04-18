// P: a string
// R: Boolean, is it a case insensitive palindrome?

// E:
isPalindrome('a') // true
isPalindrome('aba') // true
isPalindrome('abba') // true
isPalindrome('abBa') // true

function isPalindrome(s){
    // to make it case insensitive, convert all to lowercase
    const teststring = s.toLowerCase()
    // compare to reverse
    return teststring == teststring.reverse()

}