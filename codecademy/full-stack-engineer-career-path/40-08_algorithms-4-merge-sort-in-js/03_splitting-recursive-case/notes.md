## Splitting: Recursive Case

The recursive case of our mergeSort() function requires that we first split the input array into a leftArray and rightArray:

```
function mergeSort(arr)
  if the length of arr equals 1
    return arr

  midIndex = the floor integer of (left + right) / 2
  leftArr = arr from 0 to midIndex
  rightArr = arr from midIndex to end
```

In the example above, the leftArray is equal to the input arr from 0 to the middle index. The right array is from the middle index to the end.

Next, we pass the left and right arrays into the mergeSort() function:

```
function mergeSort(arr)
  if the length of arr equals 1
    return arr

  midIndex = the floor integer of (left + right) / 2
  leftArray = arr from 0 to midIndex
  rightArray = arr from midIndex to end

  mergeSort(leftArray)
  mergeSort(rightArray)
```

This is our recursive call.
