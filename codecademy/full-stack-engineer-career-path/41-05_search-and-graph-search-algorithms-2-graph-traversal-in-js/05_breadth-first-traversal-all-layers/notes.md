## Breadth-First Traversal (All layers)

So far, we can iterate down one layer, but we have yet to iterate down the remaining layers. In order to do so, we will introduce a queue that will keep track of all of the vertices to visit.

As we iterate through the neighbors, we will add its connected vertices to the end of the queue, pull off the next neighbor from the queue, add its connected vertices, and so on. This way allows us to maintain the visiting order; we will visit the vertices across the same layer while queueing up the next layer. When there are no vertices left in the current layer, the vertices of the next layer are already queued up, so we move down and iterate across the next layer.

We will use our implementation of the Queue data structure that was covered in a previous course. It is located in Queue.js. Go ahead and take a quick look to refresh your memory of the data structure and the available methods.
