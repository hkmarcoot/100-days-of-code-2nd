function checkTitle(str) {
  var arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== arr[i][0].toUpperCase()) {
      return false;
    }
  }
  return true;
}

console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("A Simple Java Script Program!"));
console.log(checkTitle("PAPAFAM is amazing"));

/* Given Helpful Links
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Regular Expressions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/
