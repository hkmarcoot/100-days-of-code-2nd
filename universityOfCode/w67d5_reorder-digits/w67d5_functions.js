function reorderDigits(arr, order) {
  var result = [];
  // Each number in array change to string
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString();
  }
  // For every string in the array
  for (var i = 0; i < arr.length; i++) {
    // Split the string into individual character
    var newArr = arr[i].split("");

    // Convert each character to be integer
    for (var j = 0; j < newArr.length; j++) {
      newArr[j] = parseInt(newArr[j]);
    }

    // Sort the integers
    if (order === "asc") {
      newArr.sort((a, b) => a - b);
    } else if (order === "desc") {
      newArr.sort((a, b) => b - a);
    }

    // Convert the sorted integers in array to character
    for (var k = 0; k < newArr.length; k++) {
      newArr[k] = newArr[k].toString();
    }

    // Join the array items to be a string, and convert the string back to numbers
    result.push(parseInt(newArr.join("")));
  }

  return result;
}
module.exports = reorderDigits;

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.every()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   for...of
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/
