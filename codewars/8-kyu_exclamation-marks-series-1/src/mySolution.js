/*
Title: 
- Exclamation marks series #1: Remove an exclamation mark from the end of string

Description:
- Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

Tags:
- Strings, Fundamentals

*/

export function remove(string) {
  //coding and coding....
  let result = string;
  if (string[string.length - 1] === "!") {
    result = string.slice(0, string.length - 1);
  }
  return result;
}
