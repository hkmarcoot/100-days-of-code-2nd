## Partitioning Part I - The Pivot Element

Partitioning is the crux of the quicksort algorithm. Without it, we wouldn’t know how to split our unsorted array into useful partitions.

This procedure utilizes two internal indices, leftIndex and rightIndex that move in opposite directions. These indices are used for:

- computing the pivot element
- comparing the elements located at each index with the pivot element
- determining the pivot index, the desired location of the pivot element in the set after elements have been swapped, if any

The basic idea of partitioning is as follows:

- Start with the middle element
- While you haven’t looked through the whole array (leftIndex is still < rightIndex)
- move leftIndex up until you find something greater than the pivot
- move rightIndex down until you find something less than the pivot
- swap those elements, and move the indices in by one step so to continue checking if swaps are necessary
- return the last left element index

An initial pivot element can be arbitrarily chosen in the beginning of the partitioning process to be one of the following by default:

- first element of the array
- last element of the array
- middle element of the array
- random element of the array

The final location of the pivot element will be determined at the end of the partitioning process.

In some quicksort implementations, the first or last element is commonly picked as the pivot element. In our JavaScript implementation, we will use the middle element instead because it provides a better average runtime. To do this, we will need both leftIndex and rightIndex.

```
pivot = the average of the sum of leftIndex and rightIndex rounded down

```
