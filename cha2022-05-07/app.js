// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


// PREP

// P:   a string that may be empty

// R:   a string, first word capitalized, white space removed
//      edge cases: empty string, return boolean (false)
//      edge cases: > 140 chars, return boolean (false)
//      words are defined as runs of non whitespace
//      to clarify, how should we deal with a string that is greater than 140 chars, but will be less than 140 after white space is trimmed?
//              final hashtag must be < 140 char
//      how should we deal with a string that is 140 characters without the '#'?
//              final hashtag must be < 140 char
//      how should we deal with a string that is not empty, but is all white space?
//              also returns false

function generateHashtag (str) {
    let trimmed = str.trim()
    if (trimmed == '') {
      return false
    }
    let words = trimmed.split(/ +/)
    let capwords = words.map(e => e[0].toUpperCase() + e.substring(1))
                                 
    let hashtag = '#' + capwords.join('')
    if (hashtag.length == 0 || hashtag.length > 140) {
      return false
    } else {
      return hashtag
    }
  }

// Examples
generateHashtag(" Hello there thanks for trying my Kata")  //  "#HelloThereThanksForTryingMyKata"
generateHashtag("    Hello     World   ")                  //  "#HelloWorld"
generateHashtag("")                                        //  false