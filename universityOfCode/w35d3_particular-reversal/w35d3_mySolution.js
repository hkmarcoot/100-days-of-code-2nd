function specialReverse(str, chr) {
  var arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === chr) {
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

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));

// Reference
// https://www.programiz.com/javascript/examples/reverse-string

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   String.prototype.startsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
  */
