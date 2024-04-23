/* ******************functions.js********************** */
function rps(a, b) {
  if (a === "Rock" && b === "Rock") return "It's a draw";
  if (a === "Rock" && b === "Paper") return "The winner is p2";
  if (a === "Rock" && b === "Scissors") return "The winner is p1";
  if (a === "Paper" && b === "Paper") return "It's a draw";
  if (a === "Paper" && b === "Scissors") return "The winner is p2";
  if (a === "Paper" && b === "Rock") return "The winner is p1";
  if (a === "Scissors" && b === "Scissors") return "It's a draw";
  if (a === "Scissors" && b === "Rock") return "The winner is p2";
  if (a === "Scissors" && b === "Paper") return "The winner is p1";
}
module.exports = rps;

/* Given Helpful Links
   switch
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
   if...else
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
   Conditional (ternary) Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  */
