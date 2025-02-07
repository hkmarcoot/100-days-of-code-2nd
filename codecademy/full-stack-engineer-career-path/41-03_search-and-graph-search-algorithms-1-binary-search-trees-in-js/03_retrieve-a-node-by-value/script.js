const BinaryTree = require("./BinaryTree");

// create a BinaryTree
const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);

console.log(bt.getNodeByValue(75));
console.log(bt.getNodeByValue(55));
