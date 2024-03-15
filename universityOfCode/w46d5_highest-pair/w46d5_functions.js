/* ********************functions.js************************* */
function highestPair(arr) {
  var testArr = removewithfilter(arr);
  // See reference 2. Compare two arrays
  if (JSON.stringify(testArr) === JSON.stringify(arr)) return false;
  var arrofobj = [];
  var rank = {
    2: 1,
    A: 2,
    K: 3,
    Q: 4,
    J: 5,
    10: 6,
    9: 7,
    8: 8,
    7: 9,
    6: 10,
    5: 11,
    4: 12,
    3: 13,
  };
  for (let i = 0; i < 5; i++) {
    var count = 0;
    for (let j = 0; j < 5; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > 1) {
      arrofobj.push({ card: arr[i], rank: rank[arr[i]] });
    }
  }
  // See reference 3. Compare array of objects to get min
  var result = arrofobj.reduce((prev, curr) =>
    prev.rank < curr.rank ? prev : curr
  );

  return [true, result.card];
}

// See reference 1
function removewithfilter(arr) {
  let outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
  });

  return outputArray;
}
module.exports = highestPair;

// Reference
// https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/
// https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/
// https://stackoverflow.com/questions/8864430/compare-javascript-array-of-objects-to-get-min-max

/* Given Helpful Links
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
