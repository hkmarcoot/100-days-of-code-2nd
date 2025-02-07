## Setup

Dijkstra’s Algorithm is used for evaluating the shortest paths between vertices in a graph. The general strategy is to iterate through the vertices in such a way that will always allow us to only consider the shorter path at each vertex and maintain every possible shortest path as we go.

We will first implement the algorithm to find the shortest distance to every vertex. Our implementation will take the following steps:

- Evaluate the distances between the starting vertex and its neighbors
- If the new distance to the neighbor is lower than the previous distance, record it, and queue up the neighbor
- Dequeue the next vertex to evaluate
- Repeat steps 2 - 3 until there are no more vertices left in the queue.

In this exercise, we will set up the objects that will keep track of the shortest distances between the starting vertex and each other vertex, and the shortest paths.

We will be using a priority queue, which is a specialized heap data structure, to maintain the vertices we need to evaluate next. We’ll explain in a later exercise exactly what it is and the reason for using it instead of a regular queue.

We have also set up a test graph for you in testGraph.js to test the output of the function as you complete the exercises.
