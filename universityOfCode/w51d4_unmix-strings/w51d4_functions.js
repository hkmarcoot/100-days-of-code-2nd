/* ********************functions.js********************** */
function unmix(str) {
  var newStr = "";
  if (str.length % 2 === 0) {
    for (var i = 0; i < str.length; i = i + 2) {
      newStr = newStr + str[i + 1] + str[i];
    }
  } else {
    for (var i = 0; i < str.length - 2; i = i + 2) {
      newStr = newStr + str[i + 1] + str[i];
    }
    newStr = newStr + str[str.length - 1];
  }

  return newStr;
}
module.exports = unmix;

/* Given Helpful Links
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   String.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
   Array.prototype.splice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 
  */
