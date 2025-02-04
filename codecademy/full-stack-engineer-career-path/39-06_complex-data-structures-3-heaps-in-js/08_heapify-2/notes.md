## Heapify II

In .bubbleUp(), we were always comparing our element with its parent. In .heapify(), we have potentially two options: the left child and the right child.

Which should we choose? We’ll use an example to think it through. Imagine we have a heap with four elements:

```
console.log(minHeap.heap)
// [null, 21, 36, 58, 42]
minHeap.popMin()
// 21
// [null, 42, 36, 58]
// Should we swap 42 with 36 or 58?
```

We want to swap with the smaller of the two children, otherwise, we wouldn’t maintain our heap condition!
