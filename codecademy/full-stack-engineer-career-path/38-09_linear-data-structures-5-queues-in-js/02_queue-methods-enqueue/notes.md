## Queue Methods: Enqueue

Enqueue is a fancy way of saying “add to a queue,” and that is exactly what we’re doing with the .enqueue() method.

When adding a node to a queue, the new node is always added to the end of the queue. If the queue is empty, the node we’re adding becomes both the head and tail of the queue. If the queue has at least one other node, the added node only becomes the new tail.

Let’s put this into action by building out an .enqueue() method for Queue.
