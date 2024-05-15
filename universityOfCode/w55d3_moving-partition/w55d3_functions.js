/* *****************functions.js******************** */
function movingPartition(arr) {
  if (arr.length === 0) return [];
  var first = [];
  var second = [];
  var result = [];
  for (var i = 0; i < arr.length - 1; i++) {
    first = [];
    second = [];
    for (var j = 0; j < i + 1; j++) {
      first.push(arr[j]);
    }
    for (var k = i + 1; k < arr.length; k++) {
      second.push(arr[k]);
    }
    result.push([first, second]);
  }
  return result;
}
module.exports = movingPartition;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.push()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
