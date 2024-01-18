function vowelLinks(str) {
  var vowel = ["a", "e", "i", "o", "u"];
  var arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      vowel.includes(arr[i][arr[i].length - 1]) &&
      vowel.includes(arr[i + 1][0])
    ) {
      return true;
    }
  }
  return false;
}

console.log(vowelLinks("an open fire"));
console.log(vowelLinks("the sudden applause"));
console.log(vowelLinks("the large appliances"));
console.log(vowelLinks("creative environment"));

/* Given Helpful Links
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   Regex Tester and Debugger
     - https://regex101.com
   
  */
