// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// 1. number of pillars (≥ 1);
// 2. distance between pillars (10 - 30 meters);
// 3. width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
    //  convert dist to cm
    let distCm = dist * 100;
    //  edge case if only 1 pillar
    if (numPill === 1) return 0;
    
    return distCm * (numPill - 1) + (width * (numPill - 2))
  }
  
  pillars(1, 10, 10) // expected: 0
  pillars(2, 20, 25) // expected: 2000
  pillars(11, 15, 30) // expected: 15270