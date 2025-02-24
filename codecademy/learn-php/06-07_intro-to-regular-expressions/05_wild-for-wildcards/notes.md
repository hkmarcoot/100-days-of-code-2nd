## Wild for Wildcards

Sometimes we don’t care exactly WHAT characters are in a text, just that there are SOME characters. Enter the wildcard .! Wildcards will match any single character (letter, number, symbol or whitespace) in a piece of text. They are useful when we do not care about the specific value of a character, but only that a character exists!

Let’s say we want to match any 9-character piece of text. The regex ......... will completely match orangutan and marsupial! Similarly, the regex I ate . bananas will completely match both I ate 3 bananas and I ate 8 bananas!

What happens if we want to match an actual period, .? We can use the escape character, \, to escape the wildcard functionality of the . and match an actual period. The regex Howler monkeys are really lazy\. will completely match the text Howler monkeys are really lazy..
