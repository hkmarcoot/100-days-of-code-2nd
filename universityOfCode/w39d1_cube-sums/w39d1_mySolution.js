function sumOfCubes(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 3);
  }
  return result;
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([5, 9, 4, 4, 9]));

/* Given Helpful Links
   Math.pow()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Exponentiation (**)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Exponentiation
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
