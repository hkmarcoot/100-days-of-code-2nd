const LinkedList = require("./LinkedList");

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  peek() {
    return this.stack.head.data;
  }

  push(value) {
    this.stack.addToHead(value);
  }

  pop() {
    const value = this.stack.removeHead();
    return value;
  }
}

module.exports = Stack;
