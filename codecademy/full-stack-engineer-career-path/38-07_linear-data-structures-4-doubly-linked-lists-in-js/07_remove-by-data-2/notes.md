## Remove By Data II

Now that we’ve found the node that we want to remove from the list (or returned null if it didn’t exist), it’s time to actually remove the node. This means resetting the pointers around the node. There are three cases here:

- The node was the head of the list, in which case we can just call .removeHead()
- The node was the tail of the list, in which case we can just call .removeTail()
- The node was somewhere in the middle of the list, in which case we will need to manually change the pointers for its previous and next nodes
