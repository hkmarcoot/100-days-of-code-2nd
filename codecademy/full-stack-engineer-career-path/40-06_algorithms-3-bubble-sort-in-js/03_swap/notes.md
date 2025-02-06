## Swap

An essential part of bubble sort is the “swapping” of pairs of unsorted elements. This animation illustrates how the swap() function of the bubble sort algorithm should work:

To swap pairs of elements, we’ll need to store one of the values at either index in a temporary variable so we can use it later. For example, doing something like this:

```
currentValue = nextValue;
nextValue = currentValue;

```

would not work because we’d “lose” one of the values. The original value of currentValue would be overwritten and there would be no reference to it. Using the temporary variable strategy seen in the GIF above avoids the loss of any of the values whose position we need to exchange.

We’ll employ this strategy to finish building out swap().
