## Maps

Being a map means relating two pieces of information, but a map also has one further requirement. Let’s consider the following table:

| Musician        | State of Birth |
| --------------- | -------------- |
| Miles Davis     | Illinois       |
| John Coltrane   | North Carolina |
| Duke Ellington  | Ohio           |
| Dizzy Gillespie | South Carolina |
| Thelonious Monk | North Carolina |

In the above table we map different jazz musicians to the state where they were born. When talking about a map we describe the inputs (jazz musicians, in this case) as the keys to the map. The output (here the state of origin) is said to be the value at a given key.

In order for a relationship to be a map, every key that is used can only be the key to a single value. In this example every musician can only have one state that they were born in, so it works. There doesn’t need to be a value for every possible key, there just can’t be more than one value for a given key. For instance, Miles Davis can’t be born in both Illinois and Kentucky.

If we looked at this relationship the other way, with states as the keys and jazz musicians born in a given state as values, this would not be a map. In the example above, if we look at “North Carolina” and try to get the jazz musician from that state, we’ll find it very difficult to do. Our relationship would give two different outputs: “John Coltrane” and “Thelonious Monk”.

We would still be able to describe that relationship with a table, but it wouldn’t be a map, and so we can’t save such a relationship using a hash map.
