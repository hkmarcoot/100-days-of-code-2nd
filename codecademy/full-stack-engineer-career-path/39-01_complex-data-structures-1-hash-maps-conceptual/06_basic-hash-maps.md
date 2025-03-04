## Basic Hash Maps

Now that we have all of the main ingredients for a hash map, let’s put them all together. First, we need some sort of associated data that we’re hoping to preserve. Second, we need an array of a fixed size to insert our data into. Lastly, we need a hash function that translates the keys of our array into indexes into the array. The storage location at the index given by a hash is called the hash bucket.

Let’s use the following example for our hash map:

| Key: Album Name        | Value: Release Year |
| ---------------------- | ------------------- |
| The Low End Theory     | 1991                |
| Midnight Marauders     | 1993                |
| Beats, Rhymes and Life | 1996                |
| The Love Movement      | 1998                |

Our map here relates to several A Tribe Called Quest studio albums with the year they were produced in. We’ll need an array of at least size 4 to contain all of these elements. And a way to turn each album name into an index into that array.

For each album name, find that album’s hash by performing the following calculation:

```
hash_value = ((# of lowercase 'a's in album name) + (# of number of lowercase 'e's in album name))

```

And then take that hash and calculate an array index by performing hash_value mod 4. Following these steps we get the following schema:

| Key: Album Name        | Hash | Hash mod 4 | Value: Release Year |
| ---------------------- | ---- | ---------- | ------------------- |
| The Low End Theory     | 2    | 2          | 1991                |
| Midnight Marauders     | 3    | 3          | 1993                |
| Beats, Rhymes and Life | 5    | 1          | 1996                |
| The Love Movement      | 4    | 0          | 1998                |

First, the key is translated into the hash using our hashing function. Then, our hash map performs modulo arithmetic to turn the hash into an array index.
