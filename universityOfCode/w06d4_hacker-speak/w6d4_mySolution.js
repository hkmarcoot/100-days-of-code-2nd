function hackerSpeak(str) {
  return str
    .split("")
    .map(function (x) {
      if (x === "a") {
        return (x = "4");
      } else if (x === "e") {
        return (x = "3");
      } else if (x === "i") {
        return (x = "1");
      } else if (x === "o") {
        return (x = "0");
      } else if (x === "s") {
        return (x = "5");
      } else {
        return (x = x);
      }
    })
    .join("");
}

/* Given Helpful Links
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 Regular Expressions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
