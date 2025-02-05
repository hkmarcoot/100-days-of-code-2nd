## Connecting Vertices with Edges

Since we can add vertices to our graph, we should be able to connect them together. We want to provide this functionality in the Graph class to add a layer of abstraction that will simplify adding edges, similar to how we abstracted vertex creation. This is where our Edge class in Edge.js will come in handy. Go ahead and take a look at the class.

The start and end properties mark the vertices that the edge connects. If the graph is directed, we can indicate the direction the edge points (towards the end vertex).

We will create an .addEdge() method in the Vertex class that connects the vertices together by creating an Edge and adding it to the vertices’ list of edges. When the Edge is created, it expects the two Vertex instances, which is how the Edge tracks the connection between the two vertices .

Then, we will use this method in the Graph‘s .addEdge() method to create edges going in both directions between the two given vertices. Even though this graph is undirected, we want to create two edges going in both directions so it is easier to traverse.
