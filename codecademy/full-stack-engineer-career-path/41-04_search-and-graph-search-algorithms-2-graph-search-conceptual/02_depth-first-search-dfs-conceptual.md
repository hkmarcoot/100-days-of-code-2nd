## Depth-First Search (DFS) Conceptual

Imagine you’re in a car, on the road with your friend, “D.” D is on a mission to get to your destination by process of elimination. D won’t stop and ask for directions. D just sticks to a chosen path until you reach the end.

At that point, if the end wasn’t actually your destination, D brings you back to the last point when there was an intersection and tries another path.

Like your friend D, depth-first search algorithms check the values along a path of vertices before moving to another path.

While this isn’t exactly ideal when you want to find the shortest path between two points, DFS can be very helpful for determining if a path even exists.

In order to accomplish this path-finding feat, DFS implementations use either a stack data structure or, more commonly, recursion to keep track of the path the search is on and the current vertex.

In a stack implementation, the most recently added vertex is popped off the stack when the search has reached the end of the path. Meanwhile, in a recursive implementation, the DFS function is recursively called for each connected vertex.
