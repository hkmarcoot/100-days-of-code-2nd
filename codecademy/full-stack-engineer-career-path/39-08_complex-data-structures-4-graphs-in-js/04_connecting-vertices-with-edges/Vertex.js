const Edge = require("./Edge.js");

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex) {
    if (!(vertex instanceof Vertex)) {
      throw new Error("Parameter must be an instance of Vertex");
    }
    const edge = new Edge(this, vertex);
    this.edges.push(edge);
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}

module.exports = Vertex;
