/* ****************functions.js***************** */
function calculateScore(arr) {
  var sonnyNum = 0;
  var jayNum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === "R" && arr[i][1] === "R") {
      // sonnyNum = sonnyNum + 0;
      // jayNum = jayNum + 0;
    } else if (arr[i][0] === "R" && arr[i][1] === "P") {
      jayNUm = jayNum + 1;
    } else if (arr[i][0] === "R" && arr[i][1] === "S") {
      sonnyNum = sonnyNum + 1;
    } else if (arr[i][0] === "P" && arr[i][1] === "P") {
      // sonnyNum = sonnyNum + 0;
      // jayNum = jayNum + 0;
    } else if (arr[i][0] === "P" && arr[i][1] === "S") {
      jayNum = jayNum + 1;
    } else if (arr[i][0] === "P" && arr[i][1] === "R") {
      sonnyNum = sonnyNum + 1;
    } else if (arr[i][0] === "S" && arr[i][1] === "S") {
      // sonnyNum = sonnyNum + 0;
      // jayNum = jayNum + 0;
    } else if (arr[i][0] === "S" && arr[i][1] === "R") {
      jayNum = jayNum + 1;
    } else if (arr[i][0] === "S" && arr[i][1] === "P") {
      sonnyNum = sonnyNum + 1;
    }
  }
  if (jayNum === sonnyNum) return "Tie";
  return jayNum > sonnyNum ? "Jay" : "Sonny";
}
module.exports = calculateScore;

/* Given Helpful Links
   For Loop
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Object initializer
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
   Conditional Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
*/
