function XO(str) {
  var numOfO = 0;
  var numOfX = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      numOfO++;
    } else if (str[i].toLowerCase() === "x") {
      numOfX++;
    }
  }

  return numOfO === numOfX;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

/* Given Helpful Links
 RegExp Constructor
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 Array.prototype.forEach()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 string.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 String.prototype.toLowerCase()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
*/
