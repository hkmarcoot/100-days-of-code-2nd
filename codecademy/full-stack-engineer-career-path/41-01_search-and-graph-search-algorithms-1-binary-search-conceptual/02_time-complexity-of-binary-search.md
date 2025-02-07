## Time Complexity of Binary Search

How efficient is binary search?

In each iteration, we are cutting the list in half. The time complexity is O(log N).

A sorted list of 64 elements will take at most log2(64) = 6 comparisons.

In the worst case:

- Comparison 1: We look at the middle of all 64 elements

- Comparison 2: If the middle is not equal to our search value, we would look at 32 elements

- Comparison 3: If the new middle is not equal to our search value, we would look at 16 elements

- Comparison 4: If the new middle is not equal to our search value, we would look at 8 elements

- Comparison 5: If the new middle is not equal to our search value, we would look at 4 elements

- Comparison 6: If the new middle is not equal to our search value, we would look at 2 elements

When there’s 2 elements, the search value is either one or the other, and thus, there is at most 6 comparisons in a sorted list of size 64.
