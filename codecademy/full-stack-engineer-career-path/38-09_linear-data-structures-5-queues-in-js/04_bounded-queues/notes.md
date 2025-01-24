## Bounded Queues

Some queues require limits on the number of nodes they can have, while other queues don’t. Queues that restrict the number of elements they can store are called bounded queues.

Let’s make our queue a bounded queue. To account for this, we will need to make some modifications to our Queue class so that we can keep track of and limit size where needed.

We’ll be adding a new property to help us out here:

.maxSize, a property that bounded queues can utilize to limit the total node count
In addition, we will add two new methods:

.hasRoom() returns true if the queue has space to add another node

.isEmpty() returns true if the size of a queue is 0
