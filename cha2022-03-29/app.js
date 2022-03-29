// P: no parameters, write this as a string method
// R: logical, are all the letters in the string upper case

// E:
'hello WORLD'.isUpperCase() // false
'HELLO WORLD'.isUpperCase() // true
'8 43-?6**'.usUpperCase() // true

String.prototype.isUpperCase = function() {
    // P: change to upper case, compare
    return this.toUpperCase() == this
}

// learning objective: for an object method
// refer to the object the method is called on using the keyword 'this'