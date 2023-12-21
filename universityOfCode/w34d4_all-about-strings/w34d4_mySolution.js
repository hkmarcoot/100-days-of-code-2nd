function allAboutStrings(str) {
  var length = str.length;
  var firstChar = str[0];
  var lastChar = str[str.length - 1];
  var middleChar = "";
  var indexOfSec = "not found";

  // Finding middle character
  if (length % 2 === 0) {
    middleChar = str[length / 2 - 1] + str[length / 2];
  } else {
    middleChar = str[(length - 1) / 2];
  }

  // Finding index of the second occurrence
  for (var i = 2; i < str.length; i++) {
    if (str[1] === str[i]) {
      indexOfSec = "@ index " + i;
    }
  }

  return [length, firstChar, lastChar, middleChar, indexOfSec];
}

console.log(allAboutStrings("LASA"));
console.log(allAboutStrings("computer"));
console.log(allAboutStrings("Science"));

/* Given Helpful Links
 Number.isInteger()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 Array.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/
