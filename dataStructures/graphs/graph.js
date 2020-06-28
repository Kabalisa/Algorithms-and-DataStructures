class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex2].push(vertex1);
  }
}

let graph = new Graph();
graph.addVertex("trapback");
graph.addVertex("animal");
graph.addVertex("undrunk");
graph.addVertex("gocrazy");
graph.addEdge("gocrazy", "trapback");
graph.addEdge("animal", "undrunk");
graph.addEdge("gocrazy", "undrunk");

console.log(graph.adjacencyList);
