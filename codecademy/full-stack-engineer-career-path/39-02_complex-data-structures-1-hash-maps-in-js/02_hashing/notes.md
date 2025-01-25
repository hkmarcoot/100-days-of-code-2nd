## Hashing

The hashing function is the secret to efficiently storing and retrieving values in a hash map. A hashing function takes a key as input and returns an index within the hash map’s underlying array.

This function is said to be deterministic. That means the hashing function must always return the same index when given the same key. This is important because we will need to hash the key again later to retrieve the stored value. We won’t be able to do this unless our hashing function behaves in a predictable and consistent way.

Getting an integer representing an index can be done by summing up each character code of the key (as a numeric value) with the running total of the previously summed character codes.

The hashing function should follow this logic:

```
declare hashCode variable with value of 0

for each character in the key
  add the sum of the current character code value and hashCode to hashCode

return hashCode
```

Adding the sum of hashCode and the character code to the hashCode again creates a deterministic and also non-reversible implementation of a hashing function. This avoids generating a duplicate index if keys have the same characters in different orders, such as bat and tab.
