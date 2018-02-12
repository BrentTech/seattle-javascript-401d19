'use strict';

module.exports = (graph,startNode,goalNode) => {
  //--------------------------------------------------------------------------
  // Vinicio - Helper Variables
  //--------------------------------------------------------------------------
  let stack = [];
  let visitedNodes = new Set();
  let parentMap = new Map();
  //--------------------------------------------------------------------------

  stack.push(startNode);
  visitedNodes.add(startNode);

  while(stack.length > 0){
    //! Vinicio - pop
    let currentNode = stack.pop();
    //console.log(`Visiting a node with value ${currentNode.value}`);

    //! Vinicio - goal validation
    if(currentNode === goalNode)
      return parentMap;
    
    //! Vinicio - loop over neighbors
    let neighbors = graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      let neighborNode = neighbor.node;

      //! Vinicio - visited set management
      if(visitedNodes.has(neighborNode))
        continue;
      else
        visitedNodes.add(neighborNode);
      
      // Vinicio - currentNode is neighbor's parent
      //! Vinicio - update parent set
      parentMap.set(neighborNode,currentNode);
      //! Vinicio - push into stack
      stack.push(neighborNode);
    }
  }
  // Vinicio - if we get here, there is no path
  return null;
};//DFS