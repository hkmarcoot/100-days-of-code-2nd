function nearestChapter(obj, num) {
  var arr = [];
  for (const property in obj) {
    arr.push(obj[property]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i] - num);
  }
  var minimumNum = Math.min(...arr);
  var minIndex = arr.lastIndexOf(minimumNum);
  return Object.keys(obj)[minIndex];
}

console.log(
  nearestChapter({ "Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37 }, 10)
);
console.log(
  nearestChapter(
    {
      "New Beginnings": 1,
      "Strange Developments": 62,
      "The End?": 194,
      "The True Ending": 460,
    },
    200
  )
);
console.log(nearestChapter({ "Chapter 1a": 1, "Chapter 1b": 5 }, 3));

// Reference
/* The for...in statement iterates over all enumerable string properties of an object */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
/* Get the Min Value’s Index in an Array */
// https://linuxhint.com/get-the-index-of-the-min-value-in-an-array-in-javascript/
/* Return the key name at index 0 */
// https://stackoverflow.com/questions/14802481/get-element-of-js-object-with-an-index
/* lastIndexOf */
// https://www.w3schools.com/jsref/jsref_lastindexof.asp#:~:text=The%20lastIndexOf()%20method%20returns,the%20beginning%20(position%200).

/* Given Helpful Links
   Object.entries()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
   Object.values()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
   Object.keys()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Math.abs()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  */
