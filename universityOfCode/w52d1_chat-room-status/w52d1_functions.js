/* *******************functions.js********************* */
function chatroomStatus(arr) {
  if (arr.length === 0) return "no one online";
  if (arr.length === 1) return arr[0] + " online";
  if (arr.length === 2) return arr[0] + " and " + arr[1] + " online";
  var remainNumber = arr.length - 2;
  return arr[0] + ", " + arr[1] + " and " + remainNumber + " more online";
}
module.exports = chatroomStatus;

/* Given Helpful Links
   Switch Statement
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
   Template literals (Template strings)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   For Loop
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   If... Else Statement
     - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
  */
