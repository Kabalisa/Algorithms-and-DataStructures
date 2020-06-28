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

  removeEdge(vertex1, vertex2) {
    //temp or built in filter
    let temp = [];
    for (let val of this.adjacencyList[vertex1]) {
      if (!(val === vertex2)) temp.push(val);
    }
    this.adjacencyList[vertex1] = temp;
    temp = [];

    for (let val of this.adjacencyList[vertex2]) {
      if (!(val === vertex1)) temp.push(val);
    }
    this.adjacencyList[vertex2] = temp;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let element of this.adjacencyList[vertex]) {
        this.removeEdge(element, vertex);
      }
      delete this.adjacencyList[vertex];
    }
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
// graph.removeEdge("gocrazy", "undrunk");
graph.removeVertex("gocrazy");

console.log(graph.adjacencyList);
