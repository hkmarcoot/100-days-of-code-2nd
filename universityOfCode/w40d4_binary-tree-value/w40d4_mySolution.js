function valueInTree(arr, num) {
  var newArr = arr.flat(2);
  // console.log(newArr);
  if (newArr.includes(num)) {
    return true;
  } else {
    return false;
  }
}

const arr1 = [3, [8, [5, null, null], null], [7, null, null]];

console.log(valueInTree(arr1, 5));

// Reference
// https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays

/* Given Helpful Links
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   Array.prototype.flat()
     - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   Array flat() Method
     - https://www.javascripttutorial.net/es-next/javascript-array-flat/
  */
