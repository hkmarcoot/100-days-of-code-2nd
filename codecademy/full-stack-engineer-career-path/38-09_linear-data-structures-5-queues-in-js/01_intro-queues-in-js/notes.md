## Introduction: Queues in JavaScript

As previously mentioned, a queue is a data structure that contains an ordered set of data that follows a FIFO (first in, first out) protocol for accessing that data.

You can visualize it as a checkout line at a supermarket:

The customer at the front of the line (equivalent to the head in a queue) is the first customer to pay for their groceries.

Any new customer must go to the back of the line (the tail of the queue) and wait until everyone in front of them has paid for their groceries (no line cutters allowed in this supermarket!)

The supermarket cashier only needs to check out the customer at the front of the line

Real-life computer science applications of queues are all around us: search algorithms like BFS (breadth-first search), job schedulers that run tasks on our computers, and keyboard processing that interprets our keystrokes are all queue based.

We’ll also set up a few helper methods that will help us keep track of the queue size in order to prevent queue overflow and underflow.

To do this, we’ll make use of some data structures you’ve already seen: nodes and linked lists. Feel free to take a look at the Node.js and LinkedList.js files in the code editor to review how these data structures are implemented and see what methods are available to you to use in this lesson’s exercises.
