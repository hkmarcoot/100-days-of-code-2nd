function isSmooth(str) {
  var arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].slice(-1) !== arr[i + 1][0]) {
      return false;
    }
  }
  return true;
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats super righteously"));

// Reference
// https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string

/* Given Helpful Links
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.endsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
  */
