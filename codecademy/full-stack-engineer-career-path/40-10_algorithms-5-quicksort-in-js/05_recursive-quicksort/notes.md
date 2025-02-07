## Recursive Quicksort

Now that we have finished implementing partition(), let’s implement the quicksort() function, which is recursive. This function takes in three parameters:

- Input array
- Left pointer
- Right pointer

The base case for this function is when the array has one element, meaning that it is sorted. As a result, the array is returned. Our JavaScript implementation does in-place sorting, hence, the array size does not change. A one-element array is symbolized by both left and right pointers pointing to the same element.

Our quicksort() function will start by calling the partition() function with the input array bounded by the left and right pointers as long as the left pointer is less than the right pointer.

The recursive steps are executed after partitioning:

- Call quicksort() to process only the left partition bounded by the left pointer and (pivot index - 1) to exclude the pivot element from the left partition

- Call quicksort() to process only the right partition bounded by the pivot index and right pointer

Continuing from the example in the last exercise, recall that we returned a pivot index, P, that points to pivot element 4 at index 3 as pointed to by L.

```
[ 3, 1, 2, 4, 8, 9 ]
        R  L
           P
```

Recall that the initial left pointer, which we will call leftBound is 0 and the initial right pointer, rightBound, is 5.

Recursively call quicksort() with the array [ 3, 1, 2, 4, 8, 9 ], left pointer 0 and right pointer 2 for the left partition [ 3, 1, 2 ] which excludes the pivot index, 3.

Similarly, we will recursively call quicksort() with the array [ 3, 1, 2, 4, 8, 9 ], left pointer 3 and right pointer 5 for the right partition [ 4, 8, 9 ] which includes the pivot index, 3.
