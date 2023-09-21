function positiveDominant(arr) {
  var positiveNum = [];
  var negativeNum = [];
  arr.forEach((x) =>
    x > 0 && !positiveNum.includes(x)
      ? positiveNum.push(x)
      : x < 0 && !negativeNum.includes(x)
      ? negativeNum.push(x)
      : null
  );

  return positiveNum.length > negativeNum.length;
}

function positiveDominant2(arr) {
  var positiveNum = arr.filter((x) => x > 0);
  var negativeNum = arr.filter((x) => x < 0);

  return [...new Set(positiveNum)].length > [...new Set(negativeNum)].length;
}

console.log(positiveDominant([1, 1, 1, 1, -3, -4]));
console.log(positiveDominant([5, 99, 832, -3, -4]));
console.log(positiveDominant([5, 0]));
console.log(positiveDominant([0, -4, -1]));
console.log(positiveDominant([1, 2, 3, -1]));

/* Given Helpful Links
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 JavaScript Array Distinct()
   - https://codeburst.io/javascript-array-distinct-5edc93501dc4
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Math.sign()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
