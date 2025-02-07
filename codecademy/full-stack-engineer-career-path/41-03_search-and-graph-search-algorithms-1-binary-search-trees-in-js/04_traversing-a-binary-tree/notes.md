## Traversing a Binary Tree

There are two main ways of traversing a binary tree: breadth-first and depth-first. With breadth-first traversal, we begin traversing at the top of the tree’s root node, displaying its data and continuing the process with the left child node and the right child node. Descend a level and repeat this step until we finish displaying all the child nodes at the deepest level from left to right.

With depth-first traversal, we always traverse down each left-side branch of a tree fully before proceeding down the right branch. However, there are three traversal options:

- Preorder is when we perform an action on the current node first, followed by its left child node and its right child node
- Inorder is when we perform an action on the left child node first, followed by the current node and the right child node
- Postorder is when we perform an action on the left child node first, followed by the right child node and then the current node

For this lesson, we will implement the inorder option. The advantage of this option is that the data is displayed in a sorted order from the smallest to the biggest.

To illustrate, let’s say we have a binary tree that looks like this:

```
           15
     /------+-----\
    12            20
   /   \         /   \
 10     13     18     22
 / \   /  \    / \   /  \
8  11 12  14  16 19 21  25
```

We begin by traversing the left subtree at each level, which brings us to 8, 10 and 11 reside. The inorder traversal would be:

```
8, 10, 11
```

We ascend one level up to visit root node 12 before we descend back to the bottom where the right subtree of 12, 13, and 14 resides. Inorder traversal continues with:

```
12, 12, 13, 14
```

We again ascend one level up to visit root node 15 before we traverse the right subtree starting at the bottom level again. We continue with the bottom leftmost subtree where 16, 18 and 19 reside. The inorder traversal continues with:

```
15, 16, 18, 19
```

We ascend one level up to visit root node 20 before we descend back to the bottom where the rightmost subtree of 21, 22 and 25 resides.

Traversal finishes with:

```
20, 21, 22, 25

```

The entire traversal becomes:

```
8, 10, 11, 12, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 25
```

Notice that all the values displayed are sorted in ascending order.
