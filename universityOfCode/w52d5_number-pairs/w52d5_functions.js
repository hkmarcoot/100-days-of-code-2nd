/* ******************functions.js******************* */
function numberPairs(str) {
  var arr = str.split(" ");
  var save = [];
  var result = 0;
  for (var i = 1; i < arr.length; i++) {
    if (save.includes(arr[i])) {
      result++;
      var index = save.indexOf(arr[i]);
      save = [...save.slice(0, index), ...save.slice(index + 1)];
    } else {
      save.push(arr[i]);
    }
  }
  return result;
}
module.exports = numberPairs;

/* Given Helpful Links
   Array
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.shift()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
