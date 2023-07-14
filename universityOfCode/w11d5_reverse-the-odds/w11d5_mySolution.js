function reverseOdd(str) {
  var arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 1) {
      arr[i] = reverseString(arr[i]);
    }
  }
  return arr.join(" ");
}

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));

// Reference
// https://www.programiz.com/javascript/examples/reverse-string

/* Given Helpful Links
 Array.prototype.reverse()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 string.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
