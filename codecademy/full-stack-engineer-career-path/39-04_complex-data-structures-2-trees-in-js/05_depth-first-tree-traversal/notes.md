## Depth-first Tree Traversal

Now that we can add nodes to our tree, the next step is to be able to traverse the tree and display its content. We can do this in one of two ways: depth-first or breadth-first.

Depth-first traversal visits the first child in the children array and that node’s children recursively before visiting its siblings and their children recursively. The algorithm is as follows:

```
For each node
  Display its data
  For each child in children, call itself recursively
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

we can traverse it depth-wise to produce this result:

```
15
3
6
9
12
19
8
0
10
19
```
