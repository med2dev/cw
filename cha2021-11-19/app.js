// P: integers, cap, on, and wait, representing the capacity, number of people
//       on, and number of people waiting to get on a bus, respectively
// R: integer, the number of people who will have to wait for the next bus

// E:
enough(10, 5, 5)    // 0
enough(100, 60, 50) // 10

function enough(cap, on, wait){
    const nextBus = on + wait - cap
    return nextBus < 0 ? 0 : nextBus
}