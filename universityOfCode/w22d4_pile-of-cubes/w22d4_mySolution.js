function cubes(m) {
  for (let i = 1; i < m; i++) {
    if (Math.pow((i * (i + 1)) / 2, 2) === m) {
      return i;
    } else if (Math.pow((i * (i + 1)) / 2, 2) > m) {
      return null;
    }
  }
}

console.log(cubes(1071225));
console.log(cubes(4183059834009));
console.log(cubes(16));
console.log(cubes(135440716410000));
console.log(cubes(10252519345963644753025));

/* Given Helpful Links
 BigInt
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 Is there a formula to add a sequence of cubes?
   - https://mathschallenge.net/library/number/sum_of_cubes
 Sum of Cubes of n Natural Numbers - Formula, Proof, Examples
   - https://www.cuemath.com/algebra/sum-of-cubes-of-n-natural-numbers/
*/
