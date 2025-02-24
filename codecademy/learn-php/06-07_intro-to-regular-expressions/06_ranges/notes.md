## Ranges

Character sets are great, but their true power isn’t realized without ranges. Ranges allow us to specify a range of characters in which we can make a match without having to type out each individual character. The regex [abc], which would match any character a, b, or c, is equivalent to regex range [a-c]. The - character allows us to specify that we are interested in matching a range of characters.

The regex I adopted [2-9] [b-h]ats will match the text I adopted 4 bats as well as I adopted 8 cats and even I adopted 5 hats.

With ranges we can match any single capital letter with the regex [A-Z], lowercase letter with the regex [a-z], any digit with the regex [0-9]. We can even have multiple ranges in the same character set! To match any single capital or lowercase alphabetical character, we can use the regex [A-Za-z].

Remember, within any character set [] we only match one character.
