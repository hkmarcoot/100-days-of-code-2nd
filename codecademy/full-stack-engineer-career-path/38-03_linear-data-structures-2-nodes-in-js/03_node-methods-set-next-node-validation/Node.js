class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("error message");
    }
  }
}

const firstNode = new Node("I am an instance of a Node!");
// firstNode.setNextNode("it is a string");

module.exports = Node;
