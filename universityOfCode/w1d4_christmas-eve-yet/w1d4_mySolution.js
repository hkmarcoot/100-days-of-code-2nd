/****************Code Starts Here********************/
function christmasEve(dateObject) {
  if (dateObject.getMonth() == 11 && dateObject.getDate() == 24) {
    return true;
  } else {
    return false;
  }
}
/****************Code Ends**************************/

// Reference:
// - https://tutorial.techaltum.com/javascript-date-object.html

/* Given Helpful Links
 Date.prototype.getDate()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
 Date.prototype.getMonth()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
 Checking Date Equality in JavaScript
    - http://adripofjavascript.com/blog/drips/checking-date-equality-in-javascript.html
 Date Object
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 RegExr: Learn, Build, & Test RegEx
    - https://regexr.com
*/
