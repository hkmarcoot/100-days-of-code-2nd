/* *************************functions.js************************* */
function removeABC(str) {
  if (!/[abcABC]/.test(str)) return null;
  return str.replace(/[abcABC]/g, "");
}
module.exports = removeABC;

/* Given Helpful Links
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Regex Tester and Debugger
     - https://regex101.com
  */
