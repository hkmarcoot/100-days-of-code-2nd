## Queue Methods: Dequeue

We can add items to the tail of our queue, but we remove them from the head using a method known as .dequeue(), which is another way to say “remove from a queue.”

Our .dequeue() removes the current head and replaces it with the following node. The .dequeue() method should also return the value of the head node.

If the queue has one node, when we remove it, the queue will be empty. If the queue has more than one node, we just remove the head node and reset the head to the following node.
