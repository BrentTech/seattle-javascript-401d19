'use strict';

const Graph = require('../src/graph');
const Node = require('../src/node');
require('jest');

describe('Graph Class',() => {
  test('Constructor',() => {
    let graph = new Graph();
    expect(graph._adjacencyList).toBeInstanceOf(Map);
  });

  test('Adding nodes',() => {
    let graph = new Graph();
    let node = new Node(5);

    graph.addNode(node);
    expect(graph._adjacencyList).toBeInstanceOf(Map);
    expect(graph._adjacencyList.size).toBe(1);
    expect(graph._adjacencyList.get(node)).toEqual([]);
  });

  test('Adding edges', () => {
    let graph = new Graph();
    let nodeA = new Node(5);
    let nodeB = new Node(5);

    graph.addNode(nodeA);
    graph.addNode(nodeB);
    graph.addEdge(nodeA,nodeB);

    let neighborsOfA = graph.getNeighbors(nodeA);

    expect(neighborsOfA).toBeInstanceOf(Array);
    expect(neighborsOfA.length).toEqual(1);
    expect(neighborsOfA[0].node).toBe(nodeB);
    expect(neighborsOfA[0].weight).toEqual(0);
  });
});//main describe