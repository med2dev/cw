// P: a string that may contain '.'
// R: the same string, replacing '.' with '-'

// E:
replaceDots('one.two.three') // 'one-two-three'

function replaceDots(str){
    // P:   regex global replace
    //      don't forget to escape the metacharacter
    return str.replace(/\./g, '-')
}

// learning objectives: 
//      1.  '.' is a regex metacharacter that matches any single character
//          to match the literal, you have to escape it    
//      2.  String.prototype.replace() does not allow matching more than one
//          character unless you use the regex global flag. So any solution
//          using the replace method must use regex

function replaceDotsNoRegex(str){
    // P: to replace each '.' without using regex
    //      split on '.', then join on '-'
    // avoid the one liner
    const nodots = str.split('.')
    return nodots.join('-')
}

// learning objective: replace multiple occurrences of a substring without regex
//      split then join