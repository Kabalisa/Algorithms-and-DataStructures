class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
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

  DFSRecursive(startingNode) {
    let result = [];
    let visited = {};

    const DFS = (vertex) => {
      if (!vertex) return undefined;
      visited[vertex] = true;
      result.push(vertex);
      for (let element of this.adjacencyList[vertex]) {
        if (!visited[element]) DFS(element);
      }
    };

    DFS(startingNode);
    return result;
  }

  DFSIterative(startingNode) {
    let s = [];
    let result = [];
    let visited = {};
    let vertex;
    s.push(startingNode);
    while (s.length) {
      vertex = s.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        s = [...s, ...this.adjacencyList[vertex]];
      }
    }
    return result;
  }

  BFS(startingNode) {
    let queue = [startingNode];
    let result = [];
    let visited = {};
    visited[startingNode] = true;
    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }
    return result;
  }
}

// let graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");
// graph.removeEdge("gocrazy", "undrunk");
// graph.removeVertex("gocrazy");

// console.log(graph.adjacencyList);
// console.log(graph.DFSRecursive("A"));
// console.log(graph.DFSIterative("A"));
// console.log(graph.BFS("A"));

