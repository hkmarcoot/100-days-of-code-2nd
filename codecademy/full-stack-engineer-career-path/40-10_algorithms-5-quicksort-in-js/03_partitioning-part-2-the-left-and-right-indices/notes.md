## Partitioning Part II - The Left and Right Indices

The leftIndex and rightIndex of a set or subset are going to set the bounds of the partition. For the first iteration, both indices mark the entire span of the original data set. In the following illustrations, L and R represent leftIndex and rightIndex respectively.

```
[ 3, 1, 4, 2, 8, 9 ]
  L     P        R
```

The pivot element for this set will be 4 as it is located near the halfpoint of the data set and indicated by P.

Next, we want to compare the element at leftIndex with the pivot element, 4. As long as it is less than the pivot, meaning that it is in the correct half of the partition, we want to move the leftIndex forward one step to the right.

```
3 < 4, move L forward
[ 3, 1, 4, 2, 8, 9 ]
     L  P        R
1 < 4, move L forward
[ 3, 1, 4, 2, 8, 9 ]
        L        R
        P
4 = 4, stop
```

We stop leftIndex at position 2 because the element at index 2 (4) is not less than the pivot element 4. Next, we switch focus to the rightIndex and compare the element at rightIndex with the pivot element, 4. As long as it is greater than the pivot, we want to move the rightIndex backward one step to the left.

```
[ 3, 1, 4, 2, 8, 9 ]
        L        R
        P
9 > 4, move R backward
[ 3, 1, 4, 2, 8, 9 ]
        L     R
        P
8 > 4, move R backward
[ 3, 1, 4, 2, 8, 9 ]
        L  R
        P
2 < 4, stop
```

We stop the rightIndex at position 3 because the element at 3 (2) is not greater than the pivot element 4. This tells us that 2 does not belong in its current position because it should be on the left of the pivot element 4. In this case, we need to swap the elements at leftIndex and rightIndex.

We will handle swapping of index elements in the next exercise.
