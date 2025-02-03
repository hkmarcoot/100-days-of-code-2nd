## Parent and Child Elements

Great work so far! Our MinHeap adds elements to the internal heap, keeps a running count, and has the beginnings of .bubbleUp().

Before we dive into the logic for .bubbleUp(), let’s review how heaps track elements. We use an array for storing internal elements, but we’re modeling it on a binary tree, where every parent element has up to two child elements.

Child and parent elements are determined by their relative indices within the internal heap. By doing some arithmetic on an element’s index, we can determine the indices for parent and child elements (if they exist).

- Parent: (index / 2), rounded down
- Left Child: index \* 2
- Right Child: (index \* 2) + 1

These calculations are important for the efficiency of the heap, but they’re not necessary to memorize, so we have provided three helper functions: getParent(), getLeft(), and getRight() in MinHeap.js.

These helpers take an index as the sole parameter and return the corresponding parent or child index.

```
console.log(myHeap.heap)
// returns [null, 10, 13, 21, 61, 22, 23, 99]

getParent(4); // returns (4 / 2) == 2

getLeft(3);   // returns (3 * 2) == 6

getRight(3);  // returns (3 * 2) + 1 == 7

```
