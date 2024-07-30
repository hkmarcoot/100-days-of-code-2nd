/* *************functions.js*************** */
function century(year) {
  var result = Math.ceil(year / 100);
  if (result === 21) return result + "st century";
  return result + "th century";
}
module.exports = century;

/* Given Helpful Links
   Math.ceil()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
   if...else
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
   Conditional (ternary) Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
   Template Literals (Template Strings)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
