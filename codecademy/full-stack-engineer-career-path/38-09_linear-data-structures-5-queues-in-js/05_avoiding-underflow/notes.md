## Avoiding Underflow

There are two conditions when enqueuing and dequeuing that we should be aware of and avoid: underflow and overflow.

Underflow occurs when we try to remove elements from an already empty queue – we cannot remove a node if it doesn’t exist. Underflow affects queues whether they are bounded or unbounded.

Let’s add code that will check for underflow when we attempt to dequeue.
