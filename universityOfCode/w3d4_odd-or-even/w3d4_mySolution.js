/**************Code Starts Here****************/
function oddOrEven(num) {
  let n = 0;
  for (i = 0; i < num.toString().length; i++) {
    n += parseInt(num.toString()[i]);
  }
  return n % 2 === 0 ? "even" : "odd";
}
/***************Code Ends*******************/

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 How to convert an integer into an array of digits?
   - https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits/19182309
 Spread Syntax
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 Array.prototype.map() 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
