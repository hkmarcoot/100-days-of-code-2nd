## Bubble Up Part II

Now that we understand how to determine the relationship of elements with the internal heap, we’re ready to finish .bubbleUp().

In a min-heap, we need to ensure that every child is greater in value than its parent. Let’s add an element to the following heap.

```
console.log(minHeap.heap)
// returns [null, 10, 13, 21, 61, 22, 23, 99]

heap.add(12)

```

```
( new_element )
{ parent_element }
[null, 10, 13, 21, {61}, 22, 23, 99, (12)]
```

Oh no! We’ve violated the min-heap condition because 12‘s parent, 61, is greater than its child, 12.

To fix this, we will exchange the parent and the child elements.

```
before
[null, 10, 13, 21, {61}, 22, 23, 99, (12)]
SWAP 12 and 61
after
[null, 10, 13, 21, (12), 22, 23, 99, {61}]

```

12‘s parent is now 13 and it violates the min-heap condition. To fix this, we continue moving upwards swapping parent-child values.

```
before
[null, 10, {13}, 21, (12), 22, 23, 99, 61]
SWAP 12 and 13
after
[null, 10, (12), 21, {13}, 22, 23, 99, 61]
```

12‘s parent is now 10 and no longer violates the min-heap condition. We’ve restored the heap!

```
[null, {10}, (12), 21, 13, 22, 23, 99, 61]
The child, 12, is greater than the parent, 10!
```

Let’s recap our strategy for .bubbleUp():

```
Set the current element index to be the last index of heap
  While current element is valid and its value is less than its parent's value
   Swap the indexes
   Update the current element index to be its parent index
```
