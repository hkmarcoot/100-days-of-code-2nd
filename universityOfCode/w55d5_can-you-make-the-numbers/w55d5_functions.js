/* ***********************functions.js************************ */
function canBuild(arr1, arr2) {
  if (arr2.length === 0) return true;
  // Start from the first item in arr2
  for (var i = 0; i < arr2.length; i++) {
    // Reset countArr to all zero
    var countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Change the item in arr2 into an array of numbers
    var itemArr = arr2[i]
      .toString()
      .split("")
      .map((x) => parseInt(x));
    // Add number to countArr. i.e. 4 will add 1 to index 4
    for (var j = 0; j < itemArr.length; j++) {
      countArr[itemArr[j]]++;
    }
    // Check whether the item in arr2 excess the given array of numbers in arr1
    for (var k = 0; k < arr1.length; k++) {
      if (countArr[k] > arr1[k]) {
        return false;
      }
    }
  }
  return true;
}
module.exports = canBuild;

/* Given Helpful Links
   Array.prototype.every()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   How to find the number of times a value occurs in an Array in JavaScript?
     - https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array
*/
