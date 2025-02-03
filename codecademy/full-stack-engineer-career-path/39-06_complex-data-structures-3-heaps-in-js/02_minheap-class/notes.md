MinHeap Class
Our MinHeap class will store two pieces of information:

- An array of elements within the heap.
- A count of the elements within the heap.

To make our lives easier, we’ll always keep one element at the beginning of the array with the value null. By doing this, we can simplify our coding by always referencing our minimum element at index 1 instead of 0 and our last element at index this.size instead of this.size - 1.

```
const minHeap = new MinHeap();
console.log(minHeap.heap);
// [ null ]
console.log(minHeap.size);
// 0
```
