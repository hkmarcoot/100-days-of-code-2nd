## Anchors

When writing regular expressions, it’s useful to make the expression as specific as possible in order to ensure that we do not match unintended text. To aid in this mission of specificity, we can use the anchor metacharacters. The anchors hat ^ and dollar sign $ are used to match text at the start and the end of a string, respectively.

The regex ^Monkeys: my mortal enemy$ will completely match the text Monkeys: my mortal enemy but not match Spider Monkeys: my mortal enemy in the wild or Squirrel Monkeys: my mortal enemy in the wild. The ^ ensures that the matched text begins with Monkeys, and the $ ensures the matched text ends with enemy.

Without the anchor tags, the regex Monkeys: my mortal enemy will match the text Monkeys: my mortal enemy in both Spider Monkeys: my mortal enemy in the wild and Squirrel Monkeys: my mortal enemy in the wild.

Once again, as with all other metacharacters, in order to match the symbols ^ and $, you need to use the escape character in your regex. The regex My spider monkey has \$10\^6 in the bank will completely match the text My spider monkey has $10^6 in the bank.
