## Collisions: Looping

We’ve added code to .assign() that takes care of an empty list, but what happens when there is a collision and there are already values stored at a particular index?

If there are already values stored in nodes at an index, we need to loop over each node in the list in order to determine how to proceed.

The two possibilities we’ll encounter while looping are:

The key we are looking for and the key of the current node is the same, so we should overwrite the value

No node in the linked list matches the key, so we should add the key-value pair to the list as the tail node

After both cases, if we haven’t already exited the loop, we should reset the loop’s condition.

With this in mind, the .assign() code for looping should look like this:

```
store the head node of the linked list in a variable current

while there is a current node
  if the current node's key is the same as the key
    store the key and value in current
  if the current node is the tail node
    store the key-value pair in the node after current
    exit the loop
  set current to the next node
```
