/* **************functions.js****************** */
function findZip(str) {
  var result = -1;
  var count = 0;
  for (var i = 0; i < str.length - 2; i++) {
    if (str[i] === "z" && str[i + 1] === "i" && str[i + 2] === "p") {
      count = count + 1;
      if (count === 2) {
        result = i;
        // End the loop
        i = str.length - 3;
      }
    }
  }
  return result;
}
module.exports = findZip;

/* Given Helpful Links
   String.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
   push() Method
     - https://www.w3schools.com/jsref/jsref_push.asp
   map() Method
     - https://www.w3schools.com/jsref/jsref_map.asp
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   split() Method
     - https://www.w3schools.com/jsref/jsref_split.asp
   length Property
     - https://www.w3schools.com/jsref/jsref_length_array.asp
   indexOf() Method
     - https://www.w3schools.com/jsref/jsref_indexof.asp
*/
