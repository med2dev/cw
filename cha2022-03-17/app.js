// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");
// Should return:

// "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

// P: string, possibly containing white space
// R: string, with white space removed, unless no white space was present, in which case 'You just wanted my autograph didn't you?"

//E 
ghostBusters("Factor y") // 'Factory'
ghostBusters("O   f fi ce") // 'Office'
ghostBusters("BusStation") // 'You just wanted my autograph didn't you?""

function ghostBusters(building){
    const result = building.replace(/\s+/g, '')
    return result == building ? "You just wanted my autograph didn't you?" : result
}

// refactor with test
function ghostBusters(building){
    return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?"
}