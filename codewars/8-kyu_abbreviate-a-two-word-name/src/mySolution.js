/*
Title:
- Abbreviate a Two Word Name

Description:
- Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



Tags:
- Strings, Fundamentals

*/

export function abbrevName(name) {
  let initials = name.split(" ");

  initials = initials.shift().charAt(0) + "." + initials.pop().charAt(0);

  return initials.toUpperCase();
}
