## Quantifiers - Optional

You are working on a research project that summarizes the findings of primate behavioral scientists from around the world. Of particular interest to you are the scientists’ observations of humor in chimpanzees, so you whip up some regex to find all occurrences of the word humor in the documents you have collected. To your dismay, your regex misses the observations of amusement written by scientists hailing from British English speaking countries, where the spelling of the word is humour. Optional quantifiers to the rescue!

Optional quantifiers, indicated by the question mark ?, allow us to indicate a character in a regex is optional, or can appear either 0 times or 1 time. For example, the regex humou?r matches the characters humo, then either 0 occurrences or 1 occurrence of the letter u, and finally the letter r. Note the ? only applies to the character directly before it.

With all quantifiers, we can take advantage of grouping to make even more advanced regexes. The regex The monkey ate a (rotten )?banana will completely match both The monkey ate a rotten banana and The monkey ate a banana.

Since the ? is a metacharacter, you need to use the escape character in your regex in order to match a question mark ? in a piece of text. The regex Aren't owl monkeys beautiful\? will thus completely match the text Aren't owl monkeys beautiful?.
