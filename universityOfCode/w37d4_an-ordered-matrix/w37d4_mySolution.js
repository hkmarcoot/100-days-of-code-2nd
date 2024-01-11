function orderedMatrix(y, x) {
  var finalArr = [];
  for (var i = 1; i <= y; i++) {
    var tempArr = [];
    for (var j = (i - 1) * x + 1; j <= i * x; j++) {
      tempArr.push(j);
    }
    finalArr.push(tempArr);
  }
  return finalArr;
}

console.log(orderedMatrix(1, 5));
console.log(orderedMatrix(5, 5));
console.log(orderedMatrix(1, 1));

/* Given Helpful Links
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   Array() constructor
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
  */
