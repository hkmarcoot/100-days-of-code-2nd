## Collisions: Retrieving

When we retrieve hash map values, we also need to be aware that different keys could point to the same array index leading us to retrieve the wrong value.

To avoid this, we’ll search through the linked list at an index until we find a node with a matching key. If we find the node with the correct key, we’ll return the value; otherwise, we’ll return null.

The .retrieve() method will follow this logic:

```
store the hashed key in the constant arrayIndex
store the head node of a list in the variable current

while there is a valid node
  if the current node's key matches the key
    return the current node's value
  set current to the next node in the list

return null
```
