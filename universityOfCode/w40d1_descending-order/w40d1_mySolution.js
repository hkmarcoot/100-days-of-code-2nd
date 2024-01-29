function sortDescending(num) {
  var result = num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return parseInt(result);
}

console.log(sortDescending(123));
console.log(sortDescending(1254859723));

/* Given Helpful Links
   includes() Method
     - https://www.w3schools.com/jsref/jsref_includes_array.asp
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
   Array.prototype.find()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  */
