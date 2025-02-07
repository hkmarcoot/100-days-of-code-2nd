Review
We made it! Now that we have completed implementing Dijkstra’s algorithm, let’s recap all the steps that we took.

We first need to initialize the two objects that we would use to keep track of the shortest paths from the starting vertex to every vertex in the graph. The previous object keeps track of the preceding vertices in the path, like a reverse linked-list. We can use it to reconstruct the entire path, but backwards. The distances object keeps track of how far each vertex is from the starting vertex.

Before we can start traversing through the edges in the graph, we must initialize each vertex’s distance and previous vertex. This is because up until now, we have not traversed down any paths to any of the vertices, so the initial distances should all be Infinity (and any actual paths are guaranteed to be less than the initial distance), and the previous vertices are all null. The only exception is the starting vertex where the distance from the starting vertex to itself is 0.

```
distances = {}
previous = {}

for every vertex in the graph:
   distances[vertex] = Infinity
   previous[vertex] = null

distances[starting vertex] = 0
```

Next, a priority queue is used to traverse through the graph. In order for a vertex to be queued, the path to that vertex must be smaller than what was previously recorded in distances. We can initially queue up the starting vertex because no other paths have been evaluated yet, so the “path” to itself is the shortest so far.

We continue to evaluate paths as long as there are vertices left in the queue. In order to evaluate new paths, we must dequeue a vertex from the queue and iterate through its neighbors. We then look at the distances to this vertex’s neighbors and the distance from the starting vertex to this vertex. The summation of these two distances is the full distance of the alternate path to the neighbor.

```
distances = {}
previous = {}
queue = priority queue

add starting vertex to queue

for every vertex in the graph:
   distances[vertex] = Infinity
   previous[vertex] = null

distances[starting vertex] = 0

while there are vertices in the queue:
   dequeue vertex from queue

   for every neighbor in vertex:
      alternate = distances[vertex] + distance from vertex to neighbor
```

Finally, we must compare the distance of the alternate path to the distance of the current path to the vertex. If the alternate path turns out to be shorter, then we want to ditch the current path and replace it with the alternate path. This means we will have to replace the neighbor’s previous vertex to the vertex, and the neighbor’s distance with the alternate distance.

With the discovery of a shorter path to the neighbor, it raises the possibility of shorter paths to other vertices in the graph through this path. To cover this case, we should add the neighbor to the queue so we can explore its connected vertices.

```
distances = {}
previous = {}
queue = priority queue

add starting vertex to queue

for every vertex in the graph:
   distances[vertex] = Infinity
   previous[vertex] = null

distances[starting vertex] = 0

while there are vertices in the queue:
   dequeue vertex from queue

   for every neighbor in vertex:
      alternate = distances[vertex] + distance from vertex to neighbor

      if alternate < distances[neighbor]:
         distances[neighbor] = alternate
         previous[neighbor] = vertex
         add neighbor to queue
```
