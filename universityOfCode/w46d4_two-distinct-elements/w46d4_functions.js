/* *********************functions.js********************* */
function returnUnique(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    var count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
module.exports = returnUnique;

/* Given Helpful Links
   Array.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  */
