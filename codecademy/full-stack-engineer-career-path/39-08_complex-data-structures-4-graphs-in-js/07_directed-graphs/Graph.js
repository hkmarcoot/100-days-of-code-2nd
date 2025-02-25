const Edge = require("./Edge.js");
const Vertex = require("./Vertex.js");

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter((v) => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      if (this.isDirected === false) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      if (this.isDirected === false) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }
}

const trainNetwork = new Graph(false, true);
const atlantaStation = trainNetwork.addVertex("Atlanta");
const newYorkStation = trainNetwork.addVertex("New York");
trainNetwork.addEdge(atlantaStation, newYorkStation);

trainNetwork.removeEdge(atlantaStation, newYorkStation);

trainNetwork.print();

module.exports = Graph;
