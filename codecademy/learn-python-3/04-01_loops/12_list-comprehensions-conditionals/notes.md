NOTE: This is a bit different than our previous comprehension since the conditional if num < 0 else num \* 3 comes after the expression num \* 2 but before our for keyword. The placement of the conditional expression within the comprehension is dependent on whether or not an else clause is used. When an if statement is used without else, the conditional must go after for <element> in <collection>. If the conditional expression includes an else clause, the conditional must go before for. Attempting to write the expressions in any other order will result in a SyntaxError.

Here are a few list comprehensions in a single block. Take a moment to compare how the syntax must change depending on whether or not an else clause is included:

```
numbers = [2, -1, 79, 33, -45]

no_if   = [num * 2 for num in numbers]
if_only = [num * 2 for num in numbers if num < 0]
if_else = [num * 2 if num < 0 else num * 3 for num in numbers]

```
