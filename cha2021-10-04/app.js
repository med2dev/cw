// P: d, an integer number of days
// R: the cost to rent a car for d days
//      cost is as follows
//      $40 a day, with a $20 discount for 3 -6 days
//                      a $50 discount for 7+ days

// E: 
rentalCarCost(5) // 180
rentalCarCost(2) // 80
rentalCarCost(10) // 350

function rentalCarCost(d){
    const discount = d > 6 ? 50 : d > 2 ? 20 : 0
    return d * 40 - discount
}