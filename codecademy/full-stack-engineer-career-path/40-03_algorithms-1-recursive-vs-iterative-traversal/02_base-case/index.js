const Node = require("./Node");
const LinkedList = require("./LinkedList");

const myList = new LinkedList();

myList.addToHead("Node 1");
myList.addToHead("Node 2");
myList.addToHead("Node 3");
myList.addToHead("Node 4");

// Add checkpoint 3 code below:
const myNodeRecursive = myList.findNodeRecursively("Node 3");
console.log(myNodeRecursive);
