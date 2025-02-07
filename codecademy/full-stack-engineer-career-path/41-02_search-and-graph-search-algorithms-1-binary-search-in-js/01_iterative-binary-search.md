## Iterative Binary Search

In this lesson, you will implement an iterative binary search function in JavaScript.

The function will:

- Accept an array of numbers and a value as arguments
- Return the index of the value if it is present in the array
- Return null if a value is not in the array

You will test your function by inputting the array shown in the gif to the right as an argument. By the end of this lesson, the following JavaScript code will print 6 to the console.

```
const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

console.log(binarySearch(searchable, target)) // 6

```

In the code above, also shown visually to the right, we use the binarySearch() function to find the index in searchable that is equal to 41. The index is 6.
