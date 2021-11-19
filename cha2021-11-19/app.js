// P: integers, cap, on, and wait, representing the capacity, number of people
//       on, and number of people waiting to get on a bus, respectively
// R: integer, the number of people who will have to wait for the next bus

// E:
enough(10, 5, 5)    // 0
enough(100, 60, 50) // 10

function enough(cap, on, wait){
    // the number of people left is the number of people on the bus
    // plus the number of people waiting to get on the bus
    // minus the capacity
    const nextBus = on + wait - cap
    // if the capacity is greater than the number waiting + on
    // this will be negative, in which case, 0 people will have to
    // stay at the bus stop and wait for the next bus
    return nextBus < 0 ? 0 : nextBus
}