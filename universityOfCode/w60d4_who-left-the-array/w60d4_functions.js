/* ****************functions.js******************* */
function missing(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }
}
module.exports = missing;

// Reference
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

/* Given Helpful Links
   Array.prototype.splice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   Arrays
     - https://www.w3schools.com/js/js_arrays.asp
   Array.prototype.find()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
