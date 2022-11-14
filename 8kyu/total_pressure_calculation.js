// Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure Ptotal exerted by the molecules. Formula to calculate the pressure is:

// Ptotal=((m1/M1)+(m2/M2)*RT/V
 
// Input
// Six values :
// M1, M2: molar masses of both gases, in grams (g)
// m1 and m2: present mass of both gases, in  g⋅mol−1
// V: volume of the vessel, in  dm3
// T: temperature, in  °C

// Output
// One value: Ptotal in units of atm

// Notes
// Remember: Temperature is given in Celsius while SI unit is Kelvin (K).  0°C = 273.15K

// The gas constant  R=0.082dm3⋅ atm⋅ K−1 ⋅ mol−1
 
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return (givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp + 273.15) / volume
  }
  
  
  // solution(44, 30, 3, 2, 5, 50) // expected: 0.7146511212121212
  // solution(60, 20, 10, 30, 10, 100) // expected: 5.099716666666667