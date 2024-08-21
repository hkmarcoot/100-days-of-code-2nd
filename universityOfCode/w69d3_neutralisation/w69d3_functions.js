/* *************functions.js************** */
function neutralise(a, b) {
  var result = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i] === "+" && b[i] === "+") {
      result = result + "+";
    } else if (a[i] === "-" && b[i] === "-") {
      result = result + "-";
    } else {
      result = result + "0";
    }
  }
  return result;
}
module.exports = neutralise;

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Spread syntax (...)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Conditional (ternary) operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
*/
