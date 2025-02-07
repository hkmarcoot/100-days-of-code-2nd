## Evaluate All Paths

Currently, we’re evaluating the distances to the neighbors of the starting vertex, but we want to expand this to every connected vertex in the graph. Every time we discover a shorter path to a neighbor, we should queue up the neighbor to explore its connections and evaluate them.

This will accomplish two things:

- Any paths that have not yet been explored will be explored
- For vertices that already have a path found, we will re-evaluate if the alternate path through the neighbor will result in a shorter distance.

We are guaranteed that every vertex is evaluated because whenever a path is found to a vertex, then it will be queued up and its neighbors will be evaluated. The only way for a vertex to escape evaluation is if there are no connections to the vertex.

For our queue, we will use a priority queue. A priority queue is a specialized form of a min-heap, where the priority of a piece of data is stored alongside data, and elements are popped based on the priority value. We have provided the MinHeap.js file for you in case you want a refresher on a basic heap data structure. In the meantime, take a look through PriorityQueue.js to familiarize yourself with the data structure. We mainly need the .add() method to queue up elements with a priority, and the .popMin() method to grab the element with the lowest priority.

This priority queue is better than a regular queue since it allows us to evaluate the vertices with the shortest distances first. This way we can avoid unnecessarily re-evaluating paths later in the queue since it is less likely that a longer path will result in a shorter distance.
