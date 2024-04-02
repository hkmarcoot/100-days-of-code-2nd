/* **********************functions.js************************* */
function isIsogram(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (arr.includes(str[i].toLowerCase())) {
      return false;
    } else {
      arr.push(str[i].toLowerCase());
    }
  }
  return true;
}
module.exports = isIsogram;

/* Given Helpful Links
   Set Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   String.prototype.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Set.prototype.size
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Array.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
  */
