## Removing a Child

Like with .addChild(), we want to provide a flexible interface for removing a child from a tree based on either its data or a TreeNode match. For example, if our method to remove a child is .removeChild(), we want to be able to execute the following:

```
const blue = 'blue';
const green = new TreeNode('green');
tree.addChild(blue);        // add data
tree.addChild(green);       // add TreeNode
tree.removeChild('blue');   // remove by data
tree.removeChild(green);    // remove by TreeNode
```

The generic steps to execute in removing a child from a tree are as follows:

```
If target child is an instance of TreeNode,
  Compare target child with each child in the children array
  Update the children array if target child is found
Else
  Compare target child with each child's data in the children array
  Update the children array if target child is found
If target child is not found in the children array
  Recursively call .removeChild() for each grandchild.
```

Because we implemented the children as an array, we can use the array .filter() method to update children. Like with .addChild(), we can also use instanceof to check if our target child is an instance of a TreeNode.
