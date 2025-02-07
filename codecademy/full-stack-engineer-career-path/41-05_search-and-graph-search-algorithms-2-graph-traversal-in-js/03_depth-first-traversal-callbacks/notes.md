## Depth-First Traversal (Callbacks)

Our current implementation of the depth-first traversal simply prints out the vertices of the graph as they are traversed. This would be useful in scenarios where we want to see the order that the traversal occurs in. For example, if the graph was an instruction list, we need the exact order that the steps will occur to determine which dependencies need to be resolved first.

However, there may be other instances where we want to do something other than printing out the traversal order. For example, if we just need to determine if a path exists, like seeing if a maze is solvable, we just need a true or false value. We can do this by opening up a callback parameter for the user.
