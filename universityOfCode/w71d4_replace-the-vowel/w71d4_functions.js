/* *************functions.js************** */
function replaceVowel(str) {
  str = str.replace(/a/g, "1");
  str = str.replace(/e/g, "2");
  str = str.replace(/i/g, "3");
  str = str.replace(/o/g, "4");
  str = str.replace(/u/g, "5");
  return str;
}
module.exports = replaceVowel;

/* Given Helpful Links
   map() Method
     - https://www.w3schools.com/jsref/jsref_map.asp
   match() Method
     - https://www.w3schools.com/jsref/jsref_match.asp
   replace() Method
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Regular Expressions
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
   split() Method
     - https://www.w3schools.com/jsref/jsref_split.asp
*/
