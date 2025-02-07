## Splitting: Base Case

In this implementation of merge sort, you will build a recursive function, called mergeSort(), that splits the input array until each element is in its own array.

So, if the input array is:

```
[3, 5, 2]

```

splitting these elements into their own arrays will look like:

```
[3]
[5]
[2]

```

The base case of this recursive function is when the input array has only one element in it. Below is a pseudocode implementation of the base case:

```
function mergeSort(arr)
  if the length of arr equals 1
    return arr
```
