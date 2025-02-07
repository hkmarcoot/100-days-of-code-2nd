Introduction

Quicksort is an efficient sorting algorithm that is based on the divide and conquer strategy. Like merge sort, the input array is partitioned into smaller parts and then combined after the elements have been rearranged. Unlike merge sort, which requires additional memory for auxiliary arrays, quicksort is space-saving because it deploys in-place sorting.

As runtime performance goes, quicksort requires more comparisons for sorting a larger input than mergesort. Like bubble sort, quicksort has a worst case runtime of O(N^2). This can happen when quicksort’s input data set comprises:

- pre-sorted numbers,
- backward-sorted numbers, or
- all similar elements along with a poorly chosen pivot element that produces a partition of zero or one element.

On average, like merge sort, the runtime of quicksort is O(N \* log N) if partition sizes are roughly equal.

The basic idea of the quicksort algorithm is to:

- split the initial unsorted data set into a left partition and a right partition
- sort each partition recursively until there is only one element left
- return the sorted array

We use a pivot element to divide our unsorted array into two parts. The elements in these parts must meet these conditions after partitioning:

- all elements in the left partition must be less than or equal to the pivot element
- all elements in the right partition must be greater than or equal to the pivot element

Determining the pivot index is done through a procedure called partitioning. Our algorithm uses an array to store the data set and stipulates the boundary of the data set with left and right pointers. The pseudocode for our quicksort algorithm is as follows:

```
If there is more than one element left in the array:
  Find the pivot index through partitioning

  If the left pointer is less than the pivot index:
    Call quicksort() on the portion of the array between the left pointer and the pivot.

  If the pivot index is less than the right pointer:
    Call quicksort() on the portion of the array between the pivot index and the right pointer.

Return the sorted array
```

The partitioning process will be explained in later exercises.
