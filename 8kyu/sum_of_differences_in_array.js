// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    let sorted = arr.sort(function(a, b){return b - a})
    let sum = 0
    
    for (let i = 0; i < sorted.length - 1; i++){
      sum += sorted[i] - sorted[i + 1]
    }
    return sum
    
    // OR
    // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
  }
  
    // sumOfDifferences([1, 2, 10]) // expected: 9
    // sumOfDifferences([-3, -2, -1]) // expected: 2