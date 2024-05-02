/* **********************functions.js********************* */
function majorityVote(arr) {
  var arr01 = [];
  var arr02 = [];
  if (arr.length === 0) return null;
  // Add the letter to arr01 and its number to arr02
  for (var i = 0; i < arr.length; i++) {
    if (!arr01.includes(arr[i])) {
      arr01.push(arr[i]);
      arr02.push(1);
    } else {
      arr02[arr01.indexOf(arr[i])] += 1;
    }
  }
  // Search for any letter > 0.5
  for (var j = 0; j < arr02.length; j++) {
    if (arr02[j] / arr.length > 0.5) {
      return arr01[j];
    }
  }

  return null;
}
module.exports = majorityVote;

/* Given Helpful Links
   Majority Element
     - https://www.geeksforgeeks.org/majority-element/
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   for...in
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  */
