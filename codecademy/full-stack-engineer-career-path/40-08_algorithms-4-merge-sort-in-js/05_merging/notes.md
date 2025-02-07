## Merging

Now, let’s turn our attention to the merge() function. First, let’s think about its arguments and what it returns:

- Arguments: two sorted lists as inputs (leftArray and rightArray)
- Returns: a sorted list with the elements of leftArray and rightArray combined. We will call this new array sortedArray

Let’s break the implementation of this function into three parts:

- Create a while loop that continues while there are still elements in leftArray and rightArray.

```
function merge(leftArray, rightArray)
  sortedArray = []
  while leftArray and rightArray have a length greater than 0
    // Do something

  return sortedArray
```

- Create conditions that adds an element to sortedArray with each loop.

```
function merge(leftArr, rightArr)
  sortedArray = []
  while leftArray and rightArray have a length greater than 0
    if leftArray[0] is less than rightArray[0]
      push leftArray[0] onto sortedArray
      remove leftArray[0] from leftArray
    else
      push rightArray[0] onto sortedArray
      remove rightArray[0] from rightArray
```

This code will add the smaller number, between leftArray[0] and rightArray[0] to the new array. Then, it will remove that number from the array.

- Return sortedArray, with leftArray and rightArray concatenated.

```
function merge(leftArr, rightArr)
  sortedArray = []
  while leftArray and rightArray have a length greater than 0
    if leftArray[0] is less than rightArray[0]
      push leftArray[0] onto sortedArray
      remove leftArray[0] from leftArray
    else
      push rightArray[0] onto sortedArray
      remove rightArray[0] from rightArray


  return sortedArray with leftArray and rightArray concatenated
```

Because the while loop continues until either leftArray or rightArray is empty, you need to concatenate whatever is left in the other array to the sorted array. In JavaScript, it’s easiest to implement this by concatenating both arrays, because the empty array will not alter the original.
