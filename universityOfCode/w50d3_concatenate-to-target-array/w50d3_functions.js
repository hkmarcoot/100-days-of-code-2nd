/* *********************functions.js************************** */
function canConcatenate(a, b) {
  return JSON.stringify(a.flat(Infinity).sort()) === JSON.stringify(b.sort());
}
module.exports = canConcatenate;

// Reference
// https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5
// https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/

/* Given Helpful Links
   Array.prototype.flat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   Array.prototype.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   Array.prototype.every()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   JSON.stringify()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
   Array.prototype.concat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  */
