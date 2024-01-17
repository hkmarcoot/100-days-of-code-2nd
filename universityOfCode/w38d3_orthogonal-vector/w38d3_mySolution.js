function isOrthogonal(arr1, arr2) {
  if (arr1.length === 2) {
    return arr1[0] * arr2[0] + arr1[1] * arr2[1] === 0;
  } else if (arr1.length === 3) {
    return arr1[0] * arr2[0] + arr1[1] * arr2[1] + arr1[2] * arr2[2] === 0;
  }
}

console.log(isOrthogonal([7, 8], [7, -6]));
console.log(isOrthogonal([-13, -26], [-8, 4]));
console.log(isOrthogonal([1, 2], [2, -1]));
console.log(isOrthogonal([2, 4, 1], [2, 1, -8]));
console.log(isOrthogonal([1, 2, 0], [2, -1, 10]));
console.log(isOrthogonal([3, 8, 9], [16, 17, -18]));

/* Given Helpful Links
   Orthogonal Vectors
     - https://onlinemschool.com/math/library/vector/orthogonality/
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.map()
     - Array.prototype.map()
  */
