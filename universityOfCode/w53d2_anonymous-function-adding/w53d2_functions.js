/* ******************functions.js******************** */
function addsNum(a) {
  return function (b) {
    return a + b;
  };
}

const adds1 = addsNum(1);
const adds10 = addsNum(10);
const adds5neg = addsNum(-5);
const adds0 = addsNum(0);

module.exports = { addsNum, adds1, adds10, adds5neg, adds0 };

/* Given Helpful Links
   Closures
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
   Function Expression
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
   Arrow Function Expressions
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   Anonymous Function
     - https://www.javascripttutorial.net/javascript-anonymous-functions/
   Higher-Order Functions
     - https://eloquentjavascript.net/05_higher_order.html
   Nested Functions
     - https://www.geeksforgeeks.org/javascript-nested-functions/
  */
