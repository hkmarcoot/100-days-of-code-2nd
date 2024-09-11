/*
Title: 
- Convert number to reversed array of digits

Description:
- Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

Tags:
- Arrays, Fundamentals

*/

export function digitize(n) {
  //code here
  let string = n.toString();
  //console.log(string);
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array[string.length - 1 - i] = Number(string.charAt(i));
  }
  return array;
}
