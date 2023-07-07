function wordMath(str) {
  var resultText = str.toLowerCase().replace(/zero/g, "0");
  resultText = resultText.replace(/one/g, "1");
  resultText = resultText.replace(/two/g, "2");
  resultText = resultText.replace(/plus/g, "+");
  resultText = resultText.replace(/minus/g, "-");
  return eval(resultText) === 2
    ? "Two"
    : eval(resultText) === 1
    ? "One"
    : "Zero";
}

console.log(wordMath("One plus one"));
console.log(wordMath("zero Plus one"));
console.log(wordMath("one minus one"));
console.log(wordMath("Two plus zero"));
console.log(wordMath("zero minus one"));
console.log(wordMath("Two minus one"));

/* Given Helpful Links
 eval()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
