const Edge = require("./Edge.js");
const Vertex = require("./Vertex.js");

class Graph {
  constructor() {
    this.vertices = [];
  }

  addEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo);
      vertexTwo.addEdge(vertexOne);
    } else {
      throw new Error("Both parameters must be instances of Vertex");
    }
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter((v) => v !== vertex);
  }

  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex("Atlanta");
const newYorkStation = trainNetwork.addVertex("New York");

trainNetwork.addEdge(atlantaStation, newYorkStation);

trainNetwork.print();

module.exports = Graph;
