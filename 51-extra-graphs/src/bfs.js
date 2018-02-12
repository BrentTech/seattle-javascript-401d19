'use strict';

module.exports = (graph,startNode,goalNode) => {
  let queue = [];
  let visitedNodes = new Set();
  let parentMap = new Map();

  // Vinicio - enqueuing our start node in the queue
  queue.unshift(startNode);
  visitedNodes.add(startNode);

  while(queue.length > 0){
    // Vinicio - dequeue
    let currentNode = queue.pop();

    // Vinicio - are we at the goal?
    if(currentNode === goalNode)
      return parentMap;

    // Vinicio - if we are not at the goal, check all the neighboors
    //           and put them on the queue
    let neighbors = graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      let neighborNode = neighbor.node; // Vinicio - ignoring the weight

      if(visitedNodes.has(neighborNode))
        continue; // Vinicio - skip all the code below and go to the next neighbor
      else
        visitedNodes.add(neighborNode);
      
      // Vinicio - currentNode is the parent (in the path) of neighbor
      parentMap.set(neighborNode,currentNode);
      queue.unshift(neighborNode);
    }
  }
  return null; // Vinicio - if we reach here, there is no path
};