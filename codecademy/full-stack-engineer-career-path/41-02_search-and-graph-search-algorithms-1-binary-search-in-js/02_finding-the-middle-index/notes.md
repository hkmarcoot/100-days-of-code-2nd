## Finding the Middle Index

A key step in each binary search iteration is to find the middle value of the current list context. In practice, we do this by tracking the first and last indices, then finding their average.

The first index we check will always be the middle value of the original list. Because of this, we start by setting the following first (left) and last (right) indices. Below, we show a pseudocode example of how to set these variables.

```
function binarySearch (arr, target)
  left = 0
  right = length of arr
  . . .
```

We could call a JavaScript implementation of this function with the following code:

```
const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

console.log(binarySearch(searchable, target))

```

Because we pass in an
Preview: Docs Loading link description
array
of length 11, the right variable is set to 11.

Next, we calculate the middle index of the array:

```
function binarySearch (arr, target)
  left = 0
  right = length of arr

  indexToCheck = the floor integer of (left + right) / 2
  . . .
```

The above function will calculate the middle index of the array by calculating the average of right and left and rounding it to the floor integer. Given left is zero and right is 11:

floor((11+0)/2)=5

So, the first index the function checks is 5.

Now you know how to calculate the first indexToCheck. In the next exercise, you will implement an approach to check whether the value at that index is equal to the target.
