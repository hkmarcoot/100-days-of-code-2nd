function generateHashtag(str) {
  // If the string is empty, return false
  if (str.length === 0) return false;
  // If the string contains only space, return false. See reference
  if (str.replace(/\s/g, "").length === 0) return false;
  // If the string length excess 140, return false
  if (str.replace(/\s/g, "").length >= 140) return false;
  // Remove duplicated spaces to be only one space, see reference
  var newStr = str.replace(/\s+/g, " ");
  // Remove space at the first letter in the string
  if (newStr[0] === " ") {
    newStr = newStr.substring(1);
  }
  // Remove space at the last letter in the string
  if (newStr[newStr.length - 1] === " ") {
    newStr = newStr.substring(0, newStr.length - 1);
  }
  // Put every word into an array
  var arr = newStr.split(" ");
  for (var i = 0; i < arr.length; i++) {
    // Make every word capitalized with its first alphabet
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  var result = "#";
  for (var j = 0; j < arr.length; j++) {
    // Putting every word into a string
    result = result + arr[j];
  }
  return result;
}
module.exports = generateHashtag;

// Reference
// https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces
// https://www.geeksforgeeks.org/how-to-replace-multiple-spaces-with-single-space-in-javascript/

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.push()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Array.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
   Map
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
   Destructuring Assignment
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   Set
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
