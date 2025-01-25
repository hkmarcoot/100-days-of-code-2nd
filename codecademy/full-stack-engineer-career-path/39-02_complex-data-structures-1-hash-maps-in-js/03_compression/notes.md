## Compression

The current hashing function will return a wide range of integers — some of which are not indices of the hash map array. To fix this, we need to use compression.

Compression means taking some input and returning an output only within a specific range.

In our hash map implementation, we’re going to have our hashing function handle compression in addition to hashing. This means we’ll add an additional line of code to compress the hashCode before we return it.

The updated .hash() should follow these steps:

```
initialize hashCode variable to 0

for each character in the key
   add the character code and hashCode to hashCode

return compressed hashCode
```
