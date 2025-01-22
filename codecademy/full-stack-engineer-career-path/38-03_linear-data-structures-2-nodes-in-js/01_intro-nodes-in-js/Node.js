class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node("I am an instance of a Node!");
console.log(firstNode.data);
console.log(firstNode.next);

module.exports = Node;
