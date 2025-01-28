## Breadth-first Tree Traversal

Breadth-first traversal visits each child in the children array starting from the first child before visiting their children and further layers until the bottom level is visited. The algorithm is as follows:

```
Assign an array to contain the current root node
While the array is not empty
  Extract the first tree node from the array
  Display tree node's data
  Append tree node's children to the array
```

Based on this tree displayed using .print():

```
15
-- 3
-- -- 6
-- -- 9
-- 12
-- -- 19
-- -- 8
-- 0
-- -- 10
-- -- 19
```

we can traverse it breadth-wise to produce this result:

```
15
3
12
0
6
9
19
8
10
19
```

Let’s implement our breadth-first traversal for TreeNode.
