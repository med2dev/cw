// PREP:
// P: a string of length 2-3, representing a playing card, e.g., 2-10, J, Q, K, A, followed by a suit indicator

// R: string, the name of the suit based on the symbol

// E
defineSuit("Q♠") // 'spades'

// Note: code points do not appear to work for this exercise
function defineSuit(card) {
    const suit = card[card.length - 1]
    if (suit == "♣"){
      return 'clubs'
    } else if (suit == "♥"){
      return 'hearts'
    } else if (suit == "♦"){
      return 'diamonds'
    } else if (suit == "♠"){
      return 'spades'
    }
}

// Alternate solution:
// create an object with keys as the suit symbols, values as the name of the suit

function defineSuit(card){
    const suits = {
      "♥": "hearts",
      "♦": "diamonds",
      "♠": "spades",
      "♣": "clubs"
    }
    return suits[card[card.length - 1]]
}