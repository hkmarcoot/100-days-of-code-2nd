## Removing the Min

Min-heaps would be useless if we couldn’t retrieve the minimum value. We’ve gone through a lot of work to maintain that value because we’re going to need it!

Our goal is to efficiently remove the minimum element from the heap. You’ll recall that we always locate the minimum element at index 1 (a placeholder element occupies index 0).

Our internal heap mirrors a binary tree. There’s a delicate balance of parent and child relationships we would ruin by directly removing the minimum.

```
console.log(minHeap.heap)
// [null, 10, 21, 13, 61, 22, 23, 99]
minHeap.popMin()
// 10
// [null, ???, 21, 13, 61, 22, 23, 99]
```

We need to remove an element that has no children, in this case, the last element. If we swap the minimum with the last element, we can easily remove the minimum from the end of the list.

```
[None, (10), 21, 13, 61, 22, 23, {99}]
minHeap.popMin()
SWAP minimum with last
[None, {99}, 21, 13, 61, 22, 23, (10)]
remove minimum
[None, 99, 21, 13, 61, 22, 23]
10
```

Terrific! We removed the minimum element with minimal disruption. Unfortunately, our heap is out of shape again with 99 sitting where the minimum element should be. We will solve this in exercises to come…
