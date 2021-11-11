// P: string
// R: length of the longest word, where a word is defined as a run of characters 
//      separated by spaces

// E: 
findLongest("The quick white fox jumped around the massive dog") // 7

function findLongest(str) {
  
    const spl = str.split(" ");
    let longest = 0
  
    for (let i = 0; i < spl.length; i++){
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
    return longest
}

// refactor
const longest = s => Math.max(...s.split(" ").map(element => element.length) )