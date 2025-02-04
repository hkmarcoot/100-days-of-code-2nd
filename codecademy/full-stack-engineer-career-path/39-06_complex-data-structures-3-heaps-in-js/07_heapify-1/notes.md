## Heapify I

We’ve retrieved the minimum element but left our MinHeap in disarray. There’s no reason to get discouraged; we’ve handled this type of problem before, and we can get our MinHeap back in shape!

We’ll define a method, .heapify(), which performs a similar role to .bubbleUp(), except now we’re moving down the tree instead of up. The current element is a parent that can have either a left child or two children, but not just a right child.

We have written a helper method, .canSwap(), to return true if swapping can occur for either child and false otherwise:

```
canSwap(current, leftChild, rightChild) {
  // Check that one of the possible swap conditions exists
  return (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
  || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    );
  }
```

To maintain the min-heap condition, the parent value has to be less than both its child values. To see if a swap is necessary, starting with the left child, we first check that the child exists and then whether the min-heap condition is broken, i.e. the current element has a value greater than that child’s value. If the left child does not break the min-heap condition, the same check is performed on the right child.
