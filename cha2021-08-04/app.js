// P: 6 values describing two gasses in a container:
//      m1: the mass of gas 1, grams per mol
//      m2: the mass of gas 2, grams per mol
//      M1: the molar mass of gas 1, grams
//      M2: the molar mass of gas 2, grams
//      V: the volume of the vessel, dm^3
//      T: temperature, degrees C

// R: the total pressure in the container

//      notes: 
//      convert C to K by adding 273.15
//      the gas constant, R, is 0.082dm^3 atm K^-1 mol^-1    

// E:
solution(44, 30, 3, 2, 5, 50) // 0.7146511212121212
solution(60, 20, 10, 30, 10, 100) // 5.099716666666667

function solution ( m1, m2, M1, M2, V, T){
    const R = 0.082
    return ((m1/M1 + m2/M2) * R * (T + 273.15) ) / V
}