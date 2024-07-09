function transformUpvotes(str) {
  var arr = str.split(" ");
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][arr[i].length - 1] === "k") {
      result.push(parseFloat(arr[i].substring(0, arr[i].length - 1)) * 1000);
    } else {
      result.push(parseFloat(arr[i]));
    }
  }
  return result;
}
module.exports = transformUpvotes;

/* Given Helpful Links
   String.prototype.endsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
   Number.parseFloat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   replace() Method
     - https://www.w3schools.com/jsref/jsref_replace.asp
   Regular Expressions
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
   eval()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
