## Evaluate Paths to Starting Vertex’s Neighbors

We have all of our records set up, so we can start traversing through the graph and evaluating the distances from the starting vertex to its neighbors.

In the evaluation of each neighbor, we compare the distance of the new path to the distance of the previous path. If the distance of the new path is shorter, we will update our records of distances and previous vertices with the new path.

Every time we evaluate an edge between a vertex and its neighbor, the if condition ensures that the record will always maintain the shortest path among the evaluations so far. This is why we can use the previously recorded distance for comparison in our evaluation.
