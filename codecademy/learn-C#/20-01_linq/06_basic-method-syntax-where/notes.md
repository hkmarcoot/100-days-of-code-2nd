## Basic Method Syntax: Where

In method syntax, each query operator is written as a regular method call.

In the last exercise, we selected every element with a length under 7. Here it is in method syntax:

```
string[] heroes = { "Zoe", "Liam", "Taryn", "Dorian", "Everett", "Marlena" };
var shortHeroes = heroes.Where(h => h.Length < 7);

```

The where operator is written as the method Where(), which takes a lambda expression as an argument. Lambda expressions are a quick way to write a method. In this case, the method returns true if h is less than 7 characters long.

Where() calls this lambda expression for every element in heroes. If it returns true, then the element is added to the resulting collection.

For example, the shortHeroes sequence from above would be:

```
[ Zoe, Liam, Taryn, Dorian ]

```
