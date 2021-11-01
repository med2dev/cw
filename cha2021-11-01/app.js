// P: array of integers
// R: smallest integer


// E:
let sif = new SmallestIntegerFinder()
sif.findSmallestInt([78, 56, 232, 12, 8]) // 8

class SmallestIntegerFinder{
    findSmallestInt(args){
        return Math.min(...args)
    }
}