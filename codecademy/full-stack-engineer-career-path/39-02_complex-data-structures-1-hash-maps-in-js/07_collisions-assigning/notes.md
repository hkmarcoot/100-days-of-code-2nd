## Collisions: Assigning

Our first step in implementing a collision strategy is updating our constructor and .assign() method to use linked lists and nodes inside the hashmap array. This will allow us to store multiple values at the same index by adding new nodes to a linked list instead of overwriting a single value. This strategy of handling collisions is called separate chaining.

A collision-proof .assign() should look like this to start:
