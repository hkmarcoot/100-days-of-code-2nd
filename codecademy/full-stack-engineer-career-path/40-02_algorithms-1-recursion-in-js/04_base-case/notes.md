The solution to the last exercise resulted in the following output:

```
Execution context: 4
Execution context: 3
Execution context: 2
Execution context: 1
NaN

```

Notice, the value saved to recursiveSolution changed from undefined to NaN (not a number).

Why is recursiveSolution not a number? The short answer: we didn’t define a base case. To understand the need for a base case, it’s worth discussing the call stack that JavaScript creates when you call recursiveFactorial().

If you were to call:

```
recursiveSolution = recursiveFactorial(3)

```

JavaScript would create a call stack with the following events:

- recursiveFactorial(3) = 3 \* recursiveFactorial(2)
- recursiveFactorial(2) = 2 \* recursiveFactorial(1)
- recursiveFactorial(1) = 1 \* recursiveFactorial(0)

The return value associated with each function call depends on the value returned by the n - 1 context. Because the current implementation does not return a number for recursiveFactorial(0), the result of (3) is NaN. This leads to an NaN solution for each of the contexts above it.

We need a base case to address the NaN returned from the n === 0 context. The factorial function should return a number when n === 0.
