function reversal(int) {
  var str = Math.abs(int).toString();
  var newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reversal2(int) {
  var num = Math.abs(int);
  var digit = 0;
  var result = 0;
  while (num) {
    digit = num % 10;
    result = result * 10 + digit;
    num = (num / 10) | 0;
  }
  return result;
}

console.log(reversal(5121));
console.log(reversal(69));
console.log(reversal(-122157));

// Reference
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

/* Given Helpful Links
 Math.abs()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 Reverse a Number with Math 
   - https://stackoverflow.com/questions/38053729/javascript-how-to-reverse-a-number
*/

/*
Note:

In JavaScript, the expression n = n / 10 | 0 is a way to truncate a number n to its integer part (i.e., remove the decimal part) using a bitwise OR operation (| 0).

Here's how it works step by step:

n / 10: This part of the expression divides n by 10. It performs a normal division operation, which can result in a floating-point number (a number with decimal places).

| 0: The bitwise OR operation (|) is used here to perform a bitwise OR between the result of the division and 0. When you perform a bitwise OR with 0, it effectively converts the result into a 32-bit signed integer. This operation removes the decimal part of the number, leaving only the integer part.

So, in essence, n = n / 10 | 0 is a way to ensure that n becomes an integer by truncating any decimal places. It's a common technique to convert a floating-point number into an integer in JavaScript.
*/
