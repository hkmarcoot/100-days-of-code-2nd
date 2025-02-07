## Inserting a Value

When inserting a new value into a binary tree, we compare it with the root node’s value:

```
If the new value is less than the root node's value
  If a left child node doesn't exist
    Create a new BinaryTree with the new value at a greater depth and assign it to the left pointer
  Else
    Recursively call .insert() on the left child node
Else
  If a right child node doesn't exist
    Create a new BinaryTree with the new value at a greater depth and assign it to a right pointer
  Else
    Recursively call .insert() on the right child node
```

Let’s illustrate the insertion procedure with a tree whose root node has the data 100.

```
Insert 50
50 < 100, left child node doesn't exist, create a left child node
       100
       /
     50
Insert 125
125 > 100, right child node doesn't exist, create a right child node
        100
       /   \
      50    125
Insert 75
75 < 100, left child node of 50 exists, recursive insert at left child
75 > 50, right child node doesn't exist, create a right child node
        100
       /   \
      50    125
       \
       75
Insert 25
25 < 100, left child node of 50 exists, recursive insert at left child
25 < 50, left child node doesn't exist, create a left child node
        100
       /   \
      50    125
     /  \
    25  75
```
