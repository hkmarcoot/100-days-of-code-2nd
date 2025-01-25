## Assign

We now have everything we need to find a place in the hash map array to store a value. The only thing left to do is assign the value to the index we generated. A method, .assign() will handle the logic needed to take in a key-value pair and store the value at a particular index.

A general outline of how .assign() will work is this:

```
store the hashed key in a variable arrayIndex
assign the value to the element at arrayIndex in the hash map
```
