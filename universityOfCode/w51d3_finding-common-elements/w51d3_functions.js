/* ******************functions.js*********************** */
function removewithfilter(arr) {
  let outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
  });

  return outputArray;
}

function commonElements(a, b) {
  var newArr = removewithfilter([...a, ...b].sort((a, b) => a - b));
  var result = [];
  for (var i = 0; i < newArr.length; i++) {
    if (a.includes(newArr[i]) && b.includes(newArr[i])) {
      result.push(newArr[i]);
    }
  }
  return result;
}
module.exports = commonElements;

// Reference
// https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/

/* Given Helpful Links
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Set
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   
  */
