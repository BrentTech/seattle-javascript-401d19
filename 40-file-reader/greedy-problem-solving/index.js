'use strict';

// Vinicio - Aproaches we have
// Brute Force Approach
// Dynamic Programming / Mnemonization 
// Greedy Approach

// vinicio - we are solving this problem using a 'greedy' approach
// https://en.wikipedia.org/wiki/Greedy_algorithm
let highestProductOf2 = integerArray => {
  // TODO : Error checking code
  // Vinicio - can I arrive at an optimal answer with only one pass on all the values

  let highestProductSoFar = integerArray[0] * integerArray[1];
  // Vinicio - what values do I have keep track of in order to maintain/update the best
  // value so far?
  let highestNumberSoFar = Math.max(integerArray[0],integerArray[1]);

  for(let i = 2; i < integerArray.length ; i++){
    let currentNumber = integerArray[i];

    highestProductSoFar = Math.max(
      highestProductSoFar,
      highestNumberSoFar * currentNumber
    );

    highestNumberSoFar = Math.max(highestNumberSoFar,currentNumber);
  }

  return highestProductSoFar;
};

let array = [1,3,8,3,3];
console.log(highestProductOf2(array));


// Vinicio - Problems that lend themselves to greedy approaches
// Optimization Problem
// Problems with left-to-right-structures
//  String
//  Arrays
//  Linked Lists
//  Queues
//  Sorted Hashmaps
//  Graphs
//  Polygon --> Vertex