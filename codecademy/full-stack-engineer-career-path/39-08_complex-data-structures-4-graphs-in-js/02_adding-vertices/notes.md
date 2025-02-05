## Adding Vertices

Now that we have set up our data structures, we can provide an easier way to manage the graph’s list of vertices. This gives us an opportunity to abstract out the places that use the Vertex class.

Currently, we would have to manually create a new Vertex instance and add it into the Graph’s list of vertices to populate the graph. If we create an .addVertex() method in the Graph class, it simplifies the process of adding a vertex to the graph. This alleviates the burden of knowing how the Vertex class should interact with the Graph class for whoever is using our Graph. They only need to interact with the Graph class.
