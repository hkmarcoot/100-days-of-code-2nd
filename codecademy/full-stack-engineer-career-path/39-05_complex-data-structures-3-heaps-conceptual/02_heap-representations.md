## Heap Representations

We can picture min-heaps as binary trees, where each node has at most two children. As we add elements to the heap, they’re added from left to right until we’ve filled the entire level.

At the top, we’ve filled the level containing 12 and 20. The next addition comes as the left child of 12, starting a new level in the tree. We would continue filling this level from left to right until 20 had its right child filled.

Conceptually, the tree representation is beneficial for understanding. Practically, we implement heaps in a sequential data structure like an array or list for efficiency.

Notice how by filling the tree from left to right; we’re leaving no gaps in the array. The location of each child or parent derives from a formula using the index.

- left child: (index \* 2) + 1
- right child: (index \* 2) + 2
- parent: (index - 1) / 2 — not used on the root!
