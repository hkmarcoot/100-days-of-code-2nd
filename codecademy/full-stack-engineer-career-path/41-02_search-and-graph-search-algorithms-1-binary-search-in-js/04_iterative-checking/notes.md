## Iterative Checking

At this point, you have a function that checks the middle index of an input array and returns the index if the value equals target. Let’s consider how to extend the function to iteratively check sublists when the middle value is not equal to target.

Remember back to our algorithm, the function continues to execute until the left and right indices converge or the target is found. In practice, we can implement this with the following while condition.

```
while right is greater than left
 indexToCheck = the floor integer of (left + right) / 2
 checking = value of arr at indexToCheck

 if checking is the target
   then return indexToCheck
```

Unfortunately, the above code will execute infinitely because our right and left variables do not converge from one iteration to the next. To address this issue, in addition to checking if the current value is the target value, we need to adjust the right or left index with each iteration.

```
while right is greater than left
  indexToCheck = the floor integer of (left + right) / 2
  checking = value of arr at indexToCheck

  if checking is the target
    then return indexToCheck
  if target is greater than checking
    then set left to indexToCheck + 1
  else
    set right to indexToCheck
```

In the above code, we set the left or right index to a new value based on whether target is greater than or less than checking. The above while loop will continue to execute until the left index is greater than the right index.

In the checkpoints below, you will add conditions that change the left or right index based on whether checking is greater than or less than target. With each iteration, the distance from left to right will halve.
