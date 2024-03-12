/* **************************functions.js************************** */
function freeShipping(obj) {
  return (
    Object.keys(obj).reduce(function (a, key) {
      return a + obj[key];
    }, 0) > 50
  );
}
module.exports = freeShipping;

// Reference
// https://stackoverflow.com/questions/15748656/javascript-reduce-on-object

/* Given Helpful Links
   Object.values()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Object.keys()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   Conditional Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  */
