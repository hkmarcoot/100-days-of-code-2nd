function isPalindrome(str) {
  var newStr = str.toLowerCase().replace(/[^a-z]/g, "");
  return newStr === reverseString(newStr);
}

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("No 'X' in Nixon"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));

// Reference
// https://stackoverflow.com/questions/18624457/how-do-i-extract-only-alphabet-from-a-alphanumeric-string#:~:text=var%20answer%20%3D%20'5A'%3B,javascript
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

/* Given Helpful Links
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 Array.prototype.reverse()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
