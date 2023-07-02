/********************Code Starts Here**********************/
function isBigger(first, second) {
  if (first() - second() > 0) {
    return "first";
  } else if (first() - second() < 0) {
    return "second";
  } else if (first() - second() === 0) {
    return "both";
  }
}
/********************Code Ends****************************/

// Reference:
// - https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter

/* Given Helpful Links
 Higher Order Functions
   - https://eloquentjavascript.net/05_higher_order.html
 Conditional (ternary) Operator
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 if...else
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 Callbacks
   - https://www.javascripttutorial.net/javascript-callback/
*/
