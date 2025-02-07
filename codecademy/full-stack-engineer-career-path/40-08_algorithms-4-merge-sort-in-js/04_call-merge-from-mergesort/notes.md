## Call merge() from mergeSort()

At this point, we have a function that recursively splits the input array until each element is in a single-element array. The final step is to call the function that is responsible for merging the leftArray and rightArray.

```
function mergeSort(arr)
  if the length of arr equals 1
    return arr

  midIndex = the floor integer of (left + right) / 2
  leftArray = arr from 0 to midIndex
  rightArray = arr from midIndex to end

  return merge(mergeSort(leftArray), mergeSort(rightArray))
```

In the last line of the pseudocode, we call a function named merge(). In the next exercise, you will implement a merge() function that combines the sorted leftArray and rightArray halves into a larger sorted array.
