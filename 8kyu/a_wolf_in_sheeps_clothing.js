// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.


function warnTheSheep(queue) {
	// reverse queue first
  const reversed = queue.reverse();
  // find indexOf "wolf"
  const index = reversed.indexOf("wolf")
  
  if (index === 0) {
    return "Pls go away and stop eating my sheep"
  } else {
    return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
  }
  
}

// cleaner code also:
// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
// }



warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])
// expected: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "sheep", "wolf"])
// expected: "Pls go away and stop eating my sheep"