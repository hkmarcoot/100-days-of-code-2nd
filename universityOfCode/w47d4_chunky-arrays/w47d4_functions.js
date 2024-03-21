/* **************************functions.js************************** */
function chunkify(arr, num) {
  var result = [];
  var totalItemNum = arr.length;
  var temp = [];
  for (var i = 0; i < totalItemNum; i++) {
    temp.push(arr[i]);
    if ((i + 1) % num === 0 || i + 1 === totalItemNum) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}
module.exports = chunkify;

/* Given Helpful Links
   Array.prototype.push()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   Array.prototype.splice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   For Loop
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  */
