## Shortest Path to a Target Vertex

Our current implementation of Dijkstra’s returns the shortest paths for all of the vertices in the graph. We can build upon this to create a function in shortestPath.js that reconstructs the full path to one vertex.

We will need to make a call to dijkstras() to get the map of distances and previous vertices. From there we can grab the target vertex’s shortest distance from distances and build the entire path using the previous vertices.

We cannot do this while dijkstras() continues to calculate the paths, because we cannot guarantee that the first encounter of the target vertex is the shortest path. Doing it after all the paths have been evaluated covers the possibility that an alternate path later in the queue will be shorter than the first one, particularly when there are negative distances.
