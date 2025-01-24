const Node = require("./Node");

class DoublyLinkedList {
  // Create your constructor below:
  constructor(data) {
    this.head = null;
    this.tail = null;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = DoublyLinkedList;
