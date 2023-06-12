/*************Code Starts Here***************/
function repeater(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr = newStr.concat(str);
  }
  return newStr;
}
/************Code Ends*************************/

/* Given Helpful Links
 Three Ways to Repeat a String in JavaScript
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
