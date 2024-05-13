/* ****************functions.js**************** */
function toArray(num) {
  var str = num.toString();
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(parseInt(str[i]));
  }
  return result;
}

function toNumber(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return parseInt(result);
}

module.exports = { toArray, toNumber };

/* Given Helpful Links
   parseInt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   Object.prototype.toString()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  */
