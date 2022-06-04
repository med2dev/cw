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

// Node1.4 doesn't have a string reverse method. You have to convert to array

function isPalindromeObsolete(s){
    const teststring = s.toLowerCase()
    return teststring == teststring.split('').reverse().join('')
}