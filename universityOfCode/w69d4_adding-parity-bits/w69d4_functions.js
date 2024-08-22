function addParityBit(str) {
  var adding = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      adding = adding + 1;
    }
  }
  if (adding % 2 === 0) {
    return str + "0";
  } else {
    return str + "1";
  }
}
module.exports = addParityBit;

/* Given Helpful Links
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array push() Method
     - https://www.w3schools.com/jsref/jsref_push.asp
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   String.prototype.concat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
*/
