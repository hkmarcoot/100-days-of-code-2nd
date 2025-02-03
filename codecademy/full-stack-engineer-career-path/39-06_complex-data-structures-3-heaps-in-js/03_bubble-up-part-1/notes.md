## Bubble Up Part I

Our MinHeap needs to satisfy two conditions:

- The element at index 1 is the minimum value in the entire list.
- Every child element in the list must be larger than its parent.

Let’s define an .add() method which will allow us to add elements into the .heap array. We will also define .bubbleUp() which will do the work of maintaining the heap conditions as we add additional elements.
