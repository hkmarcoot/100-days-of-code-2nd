## Tables

A data structure’s main utility is allowing for data to be represented in a way that resembles the way people will use that data. In some cases, the primary function of that data is that it will be sequenced through like a list and so we use a data structure that allows for easier iteration, like a linked list. In others, the usefulness comes from specifying interrelationships within the data.

In the case of tabular data there is a relationship between the elements of a row. Each column corresponds to a different feature of the row. Let’s consider the following table:

| State         | State Flower |
| ------------- | ------------ |
| Alabama       | Camellia     |
| Hawaii        | Hibiscus     |
| Mississippi   | Magnolia     |
| New York      | Rose         |
| West Virginia | Rhododendron |

Each State on the left corresponds to a specific State Flower given on the right. For instance, “New York” corresponds to “Rose”. This kind of table, with only two columns, represents a special relationship that mathematicians would call a “map”. This table maps states to state flowers, but many other relationships can be modeled with maps.
