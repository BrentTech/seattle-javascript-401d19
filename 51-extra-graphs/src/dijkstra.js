'use strict';

const PriorityQueue = require('js-priority-queue');

module.exports = (graph,startNode,goalNode) => {
  let visitedNodes = new Set();
  let parentMap = new Map();
  let shortestPathSoFar = new Map();

  let priorityQueue = new PriorityQueue({
    comparator: (a,b) => a.priority - b.priority,
  });

  // Vinicio - enqueue startNode
  // Vinicio - initalize the stortest path so far
  priorityQueue.queue({
    node: startNode,
    priority: 0,
  });
  shortestPathSoFar.set(startNode,0);

  // Vinicio - while loop over the queue
  //           dequeue
  //           check for visited nodes 
  //           check for goal node
  //           check every neighbor
  //              update shortest path so far
  while(priorityQueue.length > 0){
    // Vinicio - this makes sure to give me the node with the shortest path
    let currentNode = priorityQueue.dequeue().node;

    if(visitedNodes.has(currentNode))
      continue;
    
    // Vinicio - if we haven't visited the node, we mark it as visited
    visitedNodes.add(currentNode);

    if(currentNode === goalNode)
      return parentMap;
    
    let neighbors = graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      let neighborWeight = neighbor.weight;
      let neighborNode = neighbor.node;

      if(visitedNodes.has(neighborNode))
        continue;
      
      let newPathWeight = shortestPathSoFar.get(currentNode) + neighborWeight;

      // Vinicio - if the new path has a shorter weight, we update it
      if(!shortestPathSoFar.has(neighbor) ||
         newPathWeight < shortestPathSoFar.get(neighborNode) ){
        // Vinicio - here we assume we just found a better path

        shortestPathSoFar.set(neighborNode,newPathWeight);
        parentMap.set(neighborNode,currentNode);

        priorityQueue.queue({
          node: neighborNode,
          priority: shortestPathSoFar.get(neighborNode),
        });

      }//if
    }//for
  }//while
  return null; // Vinicio - if we get here, there is no path
};