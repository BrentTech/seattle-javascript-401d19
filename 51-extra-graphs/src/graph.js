'use strict';

module.exports = class Graph{
  constructor(){
    this._adjacencyList = new Map();
  }

  addNode(node){
    this._adjacencyList.set(node,[]);
  }
  
  addEdge(startNode,endNode,weight = 0){
    if(!this._adjacencyList.has(startNode) ||
       !this._adjacencyList.has(endNode))
      throw new Error('__ERROR__ invalid nodes');
    
    let adjacencies = this._adjacencyList.get(startNode);

    adjacencies.push({
      node:endNode,
      weight,
    });
  }

  getNeighbors(node){
    if(!this._adjacencyList.has(node))
      throw new Error('__ERROR__ invalid node');
    
    return [...this._adjacencyList.get(node)];
  }
};