## Character Sets

Spelling tests may seem like a distant memory from grade school, but we ultimately take them every day while typing. It’s easy to make mistakes on commonly misspelled words like consensus, and on top of that, there are sometimes alternate spellings for the same word.

Character sets, denoted by a pair of brackets [], let us match one character from a series of characters, allowing for matches with incorrect or different spellings.

The regex con[sc]en[sc]us will match consensus, the correct spelling of the word, but also match the following three incorrect spellings: concensus, consencus, and concencus. The letters inside the first brackets, s and c, are the different possibilities for the character that comes after con and before en. Similarly for the second brackets, s and c are the different character possibilities to come after en and before us.

Thus the regex [cat] will match the characters c, a, or t, but not the text cat.

The beauty of character sets (and alternation) is that they allow our regular expressions to become more flexible and less rigid than by just matching with literals!

We can make our character sets even more powerful with the help of the caret ^ symbol. Placed at the front of a character set, the ^ negates the set, matching any character that is not stated. These are called negated character sets. Thus the regex [^cat] will match any character that is not c, a, or t, and would completely match each character d, o or g.

Do we have a consensus that regular expressions are pretty cool?
