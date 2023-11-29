function getFrequencies(arr) {
  var resultObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in resultObj) {
      resultObj[arr[i]] += 1;
    } else {
      resultObj[arr[i]] = 1;
    }
  }
  return resultObj;
}

console.log(getFrequencies(["A", "A"]));
console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies(["A", "B", "C", "A", "A"]));
console.log(getFrequencies([true, false, true, false, false]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
console.log(getFrequencies([]));

// Reference
// https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
// https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Object.fromEntries()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
