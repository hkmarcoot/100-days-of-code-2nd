/*
Title: 
- Remove First and Last Character

Description:
- It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

Tags:
- Strings, Fundamentals

*/

export function removeChar(str) {
  //You got this!
  let newstr = str.substr(1, str.length);
  console.log(newstr);
  let newstr2 = newstr.substr(0, newstr.length - 1);
  console.log(newstr2);
  return newstr2;
}
