function emojify(str) {
  return str
    .replace("smile", ":D")
    .replace("grin", ":)")
    .replace("sad", ":(")
    .replace("mad", ":P");
}

console.log(emojify("Make me smile"));
console.log(emojify("Make me grin"));

/* Given Helpful Links
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 Working with objects
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 How to Iterate Object Properties
   - https://flaviocopes.com/how-to-iterate-object-properties-javascript/
*/
