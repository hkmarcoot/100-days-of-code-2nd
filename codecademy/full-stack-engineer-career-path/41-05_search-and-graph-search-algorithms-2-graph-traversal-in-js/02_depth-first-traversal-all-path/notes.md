## Depth-First Traversal (All paths)

We’ve gotten the hang of traversing down one path, but we want to traverse down all the paths (not just the first possible path). We will modify our existing implementation to iterate down all the other paths by using a .forEach() loop to iterate through all of the start vertex’s edges.

We won’t have to worry about iterating through all the neighbors before going down the neighbor’s first connected vertex. This is because the recursive call occurs before the next iteration of the for loop.
