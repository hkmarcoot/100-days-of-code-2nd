## When To Use Each Syntax

So far you’ve seen query syntax and two flavors of method syntax.

```
// Query syntax
var longLoudheroes = from h in heroes
  where h.Length >= 7
  select h.ToUpper();

// Method syntax - separate statements
var longHeroes = heroes.Where(h => h.Length >= 7);
var longLoudHeroes = longHeroes.Select(h => h.ToUpper());

// Method syntax - chained expressions
var longLoudHeroes2 = heroes
  .Where(h => h.Length >= 7)
  .Select(h => h.ToUpper());

```

As you get into more advanced LINQ queries and learn new operators, you’ll get a feel for what works best in each situation. For now, we generally follow these rules:

- For single-operator queries, use the method syntax.
- For everything else, use the query syntax.
