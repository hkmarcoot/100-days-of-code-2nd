/* ***************functions.js**************** */
function indexShuffle(str) {
  var oddChar = [
    "b",
    "d",
    "f",
    "h",
    "j",
    "l",
    "n",
    "p",
    "r",
    "t",
    "v",
    "x",
    "z",
  ];
  var tempStr = "";
  for (var i = 0; i < str.length; i++) {
    if (oddChar.includes(str[i])) {
      tempStr = tempStr + str[i];
    }
  }
  str = str.replace(/[bdfhjlnprtvxz]/g, "");
  return str + tempStr;
}
module.exports = indexShuffle;

/* Given Helpful Links
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Array.prototype.concat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   for...in
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/
