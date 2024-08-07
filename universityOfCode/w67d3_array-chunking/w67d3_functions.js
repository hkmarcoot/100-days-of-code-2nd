/* ***************functions.js***************** */
function chunk(arr, num) {
  var totalItemNum = arr.length;
  var result = [];
  var limit = 0;
  do {
    if (totalItemNum >= num) {
      limit = num;
      totalItemNum = totalItemNum - num;
    } else {
      limit = totalItemNum;
      totalItemNum = 0;
    }
    var tempArr = [];
    for (var i = 0; i < limit; i++) {
      tempArr.push(arr[i]);
    }
    result.push(tempArr);
    arr = arr.slice(limit, arr.length);
  } while (totalItemNum > 0);
  return result;
}
module.exports = chunk;

/* Given Helpful Links
   Split Array into Chunks
     - https://stackoverflow.com/questions/8495687/split-array-into-chunks
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/
