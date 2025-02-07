## Retrieve a Node by Value

Recall that a binary search tree provides a fast and efficient way to store and retrieve values. Like with .insert(), the procedure to retrieve a tree node by its value is recursive. We want to traverse the correct branch of the tree by comparing the target value to the current node’s value.

The base case for our recursive method is that when the values match, we return the current node. The recursive step is to call itself from an existing left or right child node with the value.

```
If target value is the same as the current node value
  Return the current node
Else
  If target value is less than the root node's value and there is a left child node
    Recursively search from the left child node
  Else if there is a right child node
    Recursively search from the right child node
```

Given the following tree:

```
        100
       /   \
      50    125
     /  \
    25  75
```

To retrieve 75, the algorithm would proceed as follows:

```
At root node, 75 < 100 and there is a left child

        100
       /   \
 ==>  50    125
     /  \
    25  75

At the node 50, 75 > 50 and there is a right child

        100
       /   \
      50    125
     /  \
    25  75 <==

Node 75 = 75, return this node
```
