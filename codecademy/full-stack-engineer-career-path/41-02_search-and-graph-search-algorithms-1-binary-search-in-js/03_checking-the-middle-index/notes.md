## Checking the Middle Index

Let’s consider how to implement an approach to check whether the value at indexToCheck is equal to the target value. Below, we use pseudocode to display two additional steps that will check if the target value is found.

```
function binarySearch (arr, target)
  left = 0
  right = length of arr

  indexToCheck = the floor integer of (left + right) / 2

  checking = value of arr at indexToCheck

  if checking is the target
    return indexToCheck
```

In the example above, we set a variable called checking to the value in arr at the position indexToCheck. Then, we return the index if it is equal to the target value.
