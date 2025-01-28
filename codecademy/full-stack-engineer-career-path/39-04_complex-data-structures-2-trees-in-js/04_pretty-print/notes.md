## Pretty Print

Wouldn’t it be nice to be able to display the structure of our tree in a captivating visual way? We have provided a helpful method, .print() that will give you a formatted text display of our tree.

For example, a tree with 3 levels starting with root node 15, children 3, 12, 0, and grandchildren 6, 9, 19, 8, 10, 19 is displayed below:

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

This method takes one parameter, level, which is initialized to 0, to enable printing the entire tree structure from the top to the bottom.
