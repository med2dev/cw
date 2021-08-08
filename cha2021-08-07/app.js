// Object oriented challenge: create a custom class, Ship
//      include in the constructor, the properties draft and crew
//      define a method, isWorthIt, that determines whether the 
//      draft attributable to cargo is more than 20
//          the average crew member adds 1.5 draft units
//          so, to find the draft attributable to cargo, 
//          subtract crew*1.5 from the draft


// P: (for isWorthIt), none. Uses existing properties of the object
// R: (isWorthIt) Boolean, is the draft attributable to cargo > 20

// E:


let emptyShip = new Ship(0, 0)
emptyShip.isWorthIt() // false

function Ship(draft, crew){
    this.draft = draft
    this.crew = crew 
    this.isWorthIt = function(){
        return this.draft - (this.crew * 1.5) > 20
    }
}