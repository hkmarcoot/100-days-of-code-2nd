## Method and Query Syntax

In LINQ, you can write queries in two ways: in query syntax and method syntax.

Query syntax looks like a multi-line sentence. If you’ve used SQL, you might see some similarities:

```
var longLoudHeroes = from h in heroes
  where h.Length >= 7
  select h.ToUpper();

```

Method syntax looks like plain old C#. We make method calls on the collection we are querying:

```
var longHeroes = heroes.Where(h => h.Length >= 7);
var longLoudHeroes = longHeroes.Select(h => h.ToUpper());

```

In LINQ, we see where/Where() and select/Select() show up as both keywords and method calls. To cover both cases, they’re generally called operators.

Note: the capitalization of the keyword is dependent on which type of syntax we use. With query syntax, the query keywords must be all lowercase. For method syntax, the methods begin with a capital letter.

Every developer has a personal preference between syntaxes, but you should be able to read both. In this lesson, we’ll start with query syntax and then move on to method.
