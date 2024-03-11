/* **********************functions.js******************* */
function sayHelloBye(str, num) {
  str = str[0].toUpperCase() + str.slice(1);
  if (num === 1) {
    return "Hello " + str;
  } else if (num === 0) {
    return "Bye " + str;
  }
}
module.exports = sayHelloBye;

/* Given Helpful Links
   String.prototype.toUpperCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   Conditional (ternary) Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   toUpperCase() Method
     - https://www.w3schools.com/jsref/jsref_touppercase.asp
   toLowerCase() Method
     - https://www.w3schools.com/jsref/jsref_tolowercase.asp
   String.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
   String.prototype.charAt() 
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  */
