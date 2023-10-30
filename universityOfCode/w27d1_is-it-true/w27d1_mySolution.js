function isTrue(str) {
  if (str.includes("=")) {
    var tempStr = str.split("=");
    return parseInt(tempStr[0]) === parseInt(tempStr[1]);
  } else if (str.includes(">")) {
    var tempStr = str.split(">");
    return parseInt(tempStr[0]) > parseInt(tempStr[1]);
  } else if (str.includes("<")) {
    var tempStr = str.split("<");
    return parseInt(tempStr[0]) < parseInt(tempStr[1]);
  }
}

console.log(isTrue("2=2"));
console.log(isTrue("8<7"));
console.log(isTrue("5=13"));
console.log(isTrue("15>4"));

/* Given Helpful Links
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 eval() - JavaScript
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 String.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
