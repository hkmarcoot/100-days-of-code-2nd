function removeLastVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  var tempArr = str.split(" ");
  var result;
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = tempArr[i].length - 1; j >= 0; j--) {
      if (vowels.some((x) => tempArr[i][j].toLowerCase() === x)) {
        tempArr[i] =
          tempArr[i].slice(0, j) + tempArr[i].slice(j + 1, tempArr[i].length);
        j = 0;
      }
    }
  }
  result = tempArr.join(" ");
  return result;
}

console.log(
  removeLastVowel("Those who dare to fail miserably can achieve greatly.")
);
console.log(removeLastVowel("Love is a serious mental disease."));
console.log(removeLastVowel("Get busy living or get busy dying."));
console.log(
  removeLastVowel(
    "If you want to live a happy life, tie it to a goal, not to people."
  )
);

// Reference
// https://www.scaler.com/topics/javascript-remove-character-from-string/

/* Given Helpful Links
 Regular Expressions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
