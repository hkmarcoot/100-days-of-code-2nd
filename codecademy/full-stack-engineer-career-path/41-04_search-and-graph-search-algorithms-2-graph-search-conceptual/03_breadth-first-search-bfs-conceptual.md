## Breadth-First Search (BFS) Conceptual

You’re back in a car, but this time, your friend “B” is navigating. Unlike D, B is a bit hesitant about whether you’ve gone the right way and keeps checking in to see if you are on the best path. At each intersection, B tries out each possible route one by one, but only for a block in each direction to see if you’ve found your destination.

Like B, breadth-first search, known as BFS, checks the values of all neighboring vertices before moving into another level of depth.

This is an incredibly inefficient way to find just any path between two points, but it’s an excellent way to identify the shortest path between two vertices. Because of this, BFS is helpful for figuring out directions from one place to another.

Unlike DFS, BFS graph search implementations use a queue data structure to keep track of the current vertex and vertices that still have unvisited neighbors. In BFS graph search a vertex is dequeued when all neighboring vertices have been visited.
