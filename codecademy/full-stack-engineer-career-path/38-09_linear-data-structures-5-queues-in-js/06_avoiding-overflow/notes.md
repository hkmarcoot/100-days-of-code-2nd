## Avoiding Overflow

Overflow occurs when we add an element to a queue that does not have room for a new node.

This condition affects bounded queues because they have fixed sizes they cannot exceed. For unbounded queues, though they don’t have a size restriction, at some point the size of the queue will exceed the available memory we can use to store this queue.

We’ll be adding code to our Queue class to check for overflow whenever we try to add a node to a queue.
