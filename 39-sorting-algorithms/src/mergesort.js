'use strict';
// naive implementation

const mergeSort = items => {
  let output = [];

  if(items.length < 2)
    return items;

  if(items.length === 2)
    return items[0] < items[1] ? items : items.reverse();
  
  let middle = Math.floor(items.length / 2);

  let leftSide = mergeSort(items.slice(0,middle));
  let rightSide = mergeSort(items.slice(middle));

  // vinicio - Assuming I have partial sort on leftSide and rightSide
  while(leftSide.length || rightSide.length){
    // vinicio - only elements on left side
    if(leftSide.length && !rightSide.length){
      output = output.concat(leftSide);
      break;
    }
    // vinicio - only elements on the right side
    if(!leftSide.length && rightSide.length){
      output = output.concat(rightSide);
      break;
    }
    // vinicio - elements on both sides
    if(leftSide[0] <= rightSide[0])
      output.push(leftSide.shift());
    else
      output.push(rightSide.shift());
  }
  return output;
}

module.exports = mergeSort;