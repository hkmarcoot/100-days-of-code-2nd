/* *****************functions.js********************* */
function possibleBonus(yourPiece, friendPiece) {
  if (yourPiece >= friendPiece) return false;
  var diff = friendPiece - yourPiece;
  if (diff >= 1 && diff <= 6) return true;
  return false;
}
module.exports = possibleBonus;

/* Given Helpful Links
   Logical AND (&&)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
   Greater than or equal (>=)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
   Less than or equal (<=) 
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal#
   if...else
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
   Return Statement
     - https://www.w3schools.com/jsref/jsref_return.asp
  */
