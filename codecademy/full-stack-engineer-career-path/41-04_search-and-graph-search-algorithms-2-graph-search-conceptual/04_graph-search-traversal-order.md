## Graph Search Traversal Order

What if you don’t need to find a path, but you do need to get a list of all the values in a graph?

Well, it turns out that in addition to path-finding, depth-first search is pretty adept at organizing vertices (or vertex values) with a clear order of visitation from beginning to end.

There are three main traversal orders that you’ll come across for graph traversal:

Preorder, in which each vertex is added to the “visited” list and added to the output list BEFORE getting added to the stack
Postorder, in which each vertex is added to the “visited” list and added to the output list AFTER it is popped off the stack
Reverse Post-Order (also known as Topological Sort), which returns an output list that is exactly the reverse of the post-order list
Take a look at the directed graph structure we have depicted here. Let’s say that we want a list of all vertex values, starting with “Lasers”, in the order that they are added to the stack.

A pre-order DFS traversal would come in handy and we might end up with the following list. (We’ll assume here that this algorithm prefers visiting things in alphabetical order if there is a choice.):

```
["Lasers", "Lava", "Snakes", "Spikes", "Piranhas"]

```

Now, let’s say we want the same values, but with each value only added to the list once its vertex has been popped from the stack. In this case, our post-order DFS traversal would result in a list that looked like:

```
["Spikes", "Snakes", "Lava", "Piranhas", "Lasers"]

```

You may notice that the post-order list is not the reverse of the pre-order list. A reverse post-order list would still begin with “Lasers”, but then begin to differ:

```
["Lasers", "Piranhas", "Lava", "Snakes", "Spikes"]

```

What happens if there are unvisited vertices that are not reachable from the current path? The search would visit them in (here alphabetical) order after exploring the current path.
