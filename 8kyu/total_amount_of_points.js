// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let total = 0
    // loop over the array with "For Of"
      for (let result of games) {
      // console.log(result)
      if (result[0] > result[2]) {
        total += 3
      } else if (result[0] === result[2]) {
        total += 1
      }
    }
    
    return total
  }
  
  // OR 
  
  // const points = games => 
  // 	games.reduce((total, currentValue) => {
  // 		return total += currentValue[0] > currentValue[2] ? 3 : currentValue[0] === currentValue[2] ? 1 : 0;
  // }, 0)
  
  
  points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) // expected: 30
  points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) // expected: 10
  points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) // expected: 0
  points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) // expected: 15
  points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) // expected: 12