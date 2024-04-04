/* ************************functions.js*********************** */
function recurIndex(str) {
  var arrChr = [];
  var arrIndex = [];
  var obj = {};
  if (str === null || str === undefined) return {};
  for (var i = 0; i < str.length; i++) {
    if (!arrChr.includes(str[i])) {
      arrChr.push(str[i]);
      arrIndex.push(i);
    } else {
      var key = str[i];
      var value = [arrIndex[arrChr.indexOf(str[i])], i];
      obj[key] = value;
      return obj;
    }
  }
  return {};
}
module.exports = recurIndex;

// Reference
// Object adding new key value pairs
// https://www.30secondsofcode.org/js/s/add-key-value-pair-to-object/
// indexOf
// https://stackoverflow.com/questions/49772199/get-index-of-array-which-contains-include-string-value-in-javascript-node-js
// https://www.w3schools.com/jsref/jsref_indexof_array.asp
// Jest toMatchObject
// https://stackoverflow.com/questions/47754777/how-can-i-test-for-object-keys-and-values-equality-using-jest
// Jest dynamic testing
// https://stackoverflow.com/questions/45713938/jest-looping-through-dynamic-test-cases

/* Given Helpful Links
   Array.isArray()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
   Array
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  */
