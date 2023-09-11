function countVowels(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  var newStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(newStr[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("PAPAFAM"));
console.log(countVowels("Jay"));
console.log(countVowels("Prediction"));

/* Given Helpful Links
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Array.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
