## Loops

In order to sort an array, we’ll need to visit pairs of elements and check if they should be moved or kept at their current index. To accomplish this we’ll use two loops:

- One loop that will execute an inner loop depending on the state of a variable representing whether the input array might be sorted or not

- An inner loop to compare and swap pairs of elements in the array
