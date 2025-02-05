## Base Case

Before we consider the base and recursive cases, let’s think about the two parameters required to traverse a linked list recursively:

- data – the first parameter. This is the value of the Node that is being searched for in the linked list.

- currentNode – the second parameter. This is the current node in the linked list. During each recursive call, the function will pass the next node as this argument.

```
class LinkedList {

  findNodeRecursively(data, currentNode = this.head) {
   // Some code
  }
}

```

Notice, we added this.head as the default argument for currentNode. This is useful because, if you call findNodeRecursively() with only a data argument, the method will traverse the entire linked list beginning from its head.

Now let’s consider the base case for our linked list. We should return a value under the following two cases:

- If the method finds a node with the matching value, it should return the node.
- If the method reaches the end of the list, it should return null.
