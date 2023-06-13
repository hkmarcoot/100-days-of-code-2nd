function potatoCount(str) {
  let arr = str.split("");
  let newStr = "";
  let count = 0;
  for (let i = 0; i < str.length - 5; i++) {
    newStr = arr[i].concat(
      arr[i + 1],
      arr[i + 2],
      arr[i + 3],
      arr[i + 4],
      arr[i + 5]
    );
    if (newStr === "potato") {
      count++;
      i = i + 5;
    }
  }
  return count;
}

/* Given Helpful Links
 How to Count String Occurrence in String
   - https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 String length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 JavaScript Regular Expressions
   - https://www.w3schools.com/js/js_regexp.asp
 String.prototype.matchAll()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
*/
