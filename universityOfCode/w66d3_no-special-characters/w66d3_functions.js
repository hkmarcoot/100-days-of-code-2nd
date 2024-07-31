/* ***************functions.js**************** */
function removeSpecialCharacters(str) {
  return str.replace(/[.!@#$%^&\\*()+={}<>,`~|?\[\]]/g, "");
}
module.exports = removeSpecialCharacters;

// Reference
// https://community.mendix.com/link/space/microflows/questions/125585
// https://stackoverflow.com/questions/20528238/what-is-the-meaning-of-the-in-this-regex#:~:text=The%20%5C%20is%20escaped%20because%20the,followed%20by%20zero%20or%20many%20%2B%20.

/* Given Helpful Links
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   includes() Function
     - https://www.w3schools.com/jsref/jsref_includes.asp
   RegExp Constructor
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
*/
