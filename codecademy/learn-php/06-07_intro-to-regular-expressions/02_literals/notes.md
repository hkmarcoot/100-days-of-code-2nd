## Literals

The simplest text we can match with regular expressions are literals. This is where our regular expression contains the exact text that we want to match. The regex a, for example, will match the text a, and the regex bananas will match the text bananas.

We can additionally match just part of a piece of text. Perhaps we are searching a document to see if the word monkey occurs, since we love monkeys. We could use the regex monkey to match monkey in the piece of text The monkeys like to eat bananas..

Not only are we able to match alphabetical characters — digits work as well! The regex 3 will match the 3 in the piece of text 34, and the regex 5 gibbons will completely match the text 5 gibbons!

Regular expressions operate by moving character by character, from left to right, through a piece of text. When the regular expression finds a character that matches the first piece of the expression, it looks to find a continuous sequence of matching characters.
