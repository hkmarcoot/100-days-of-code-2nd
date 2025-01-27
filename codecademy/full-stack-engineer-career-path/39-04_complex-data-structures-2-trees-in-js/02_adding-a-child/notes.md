## Adding a Child

The next task is to add a child to our tree. Each child in our children array has to be an instance of a TreeNode, however we want to allow our user interface to accept adding data in other forms as well.

For instance, if our method to add a child is .addChild(), we want to accommodate calling tree.addChild(3) as well as tree.addChild(new TreeNode(3)).
