## Collisions

We have a hash map implementation, but what happens when two different keys generate the same index? Run the code in collision.js to see a collision in action.

Instead of returning 'marsh plant' and 'forest animal' we retrieve 'forest animal' twice. This is because both key-value pairs are assigned to the same index 0 and the first value, 'marsh plants' was overwritten.

When two different keys resolve to the same array index this is called a collision. In our current implementation, all keys that resolve to the same index are treated as if they are the same key. This is a problem because they will overwrite one another’s values.
