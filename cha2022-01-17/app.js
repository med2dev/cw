/*
PREP:

P: 3 floats from 0 to < 100, representing the 3 dimensions of a cuboid
Return: float, the volume of a cuboid with those dimensions

*/

class Kata {
  static getVolumeOfCuboid(length, width, height){
    // pseudocode: product of the three dimensions
    return length * width * height
  }
}

// E:
getVolumeOfCuboid(1.5, 2, 4) // 12
getVolumeOfCuboid(84.3, 1.234, 0) // 0
