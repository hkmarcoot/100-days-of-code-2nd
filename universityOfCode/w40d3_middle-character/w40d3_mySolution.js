function getMiddle(str) {
  var strLength = str.length;
  return strLength % 2 === 1
    ? str[(strLength - 1) / 2]
    : str[strLength / 2 - 1] + str[strLength / 2];
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

/* Given Helpful Links
   string.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
   String.prototype.charAt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
   Math.ceil()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
   Array.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   Math.floor()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
   Math.round()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  */
