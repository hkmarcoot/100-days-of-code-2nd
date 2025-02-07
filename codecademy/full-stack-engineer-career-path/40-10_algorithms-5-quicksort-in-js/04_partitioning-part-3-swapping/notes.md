## Partitioning Part III - Swapping

Recall that our leftIndex and rightIndex were at 2 and 3 respectively. They cannot move any further because their respective elements are greater than or less than the pivot element. When this happens, we need to swap those elements so that they will end up at the correct side of the partition.

```
[ 3, 1, 4, 2, 8, 9 ]
        L  R
        P
swap 4 and 2
[ 3, 1, 2, 4, 8, 9 ]
        L  R
        P
```

After we swap them, we move L forward and R backward.

```
Move L forward and R backward
[ 3, 1, 2, 4, 8, 9 ]
        R  L
        P
```

We return to our outer while loop condition to check if leftIndex (3) is less than or equal to rightIndex (2). In this case, 3 > 2, so we exit the while loop.

At this juncture, the elements that are less than the pivot are to the left of it and the elements that are greater than the pivot are to the right of it. We can stop partitioning and return the leftIndex which points to the pivot element 4. Hence, our pivot index is 3 which is also the leftIndex.
