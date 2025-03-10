## Call Stacks and Execution Frames

A recursive approach requires the function invoking itself with different arguments. How does the computer keep track of the various arguments and different function invocations if it’s the same function definition?

Repeatedly invoking functions may be familiar when it occurs sequentially, but it can be jarring to see this invocation occur within a function definition.

Languages make this possible with call stacks and execution contexts.

Stacks, a data structure, follow a strict protocol
for the order data enters and exits the structure: the last thing to enter is the first thing to leave.

Your programming language often manages the call stack, which exists outside of any specific function. This call stack tracks the ordering of the different function invocations, so the last function to enter the call stack is the first function to exit the call stack.

We can think of execution contexts as the specific values we plug into a function call.

```
A function which adds two numbers:

Invoking the function with 3 and 4 as arguments...
execution context:
X = 3
Y = 4

Invoking the function with 6 and 2 as arguments...
execution context:
X = 6
Y = 2

```

Consider a pseudo-code function which sums the integers in an array:

```
 function, sum_list
   if list has a single element
     return that single element
   otherwise...
     add first element to value of sum_list called with every element minus the first

```
