function consecutiveSum(num) {
  // Check whether it is a triangular number
  var n = 1;
  do {
    var sum = triangularNumSum(n);
    if (sum === num) {
      return true;
    } else {
      n++;
    }
  } while (sum < num);

  // Check whether it is a trapezoidal number
  for (let j = 3; j <= num / 2 + 1; j++) {
    for (let i = 2; i < j; i++) {
      if (triangularNumSum(j) - triangularNumSum(i) === num) {
        return true;
      }
    }
  }
  // Return false if the above checking doesn't find any matches.
  return false;

  /* --- Special Note --- */
  // There is a faster but in a more mathematical way to do this challenge:
  // From helpful link - Wikipedia: An easy way of calculating the politeness of a positive number by decomposing the number into its prime factors, taking the powers of all prime factors greater than 2, adding 1 to all of them, multiplying the numbers thus obtained with each other and subtracting 1.
  /* --- Special Note Ends --- */
}

function triangularNumSum(n) {
  return (n * (n + 1)) / 2;
}

console.log(consecutiveSum(9));
console.log(consecutiveSum(10));
console.log(consecutiveSum(64));
console.log(consecutiveSum(69));
console.log(consecutiveSum(8));
console.log(consecutiveSum(57));
console.log(consecutiveSum(6));
console.log(consecutiveSum(13));
console.log(consecutiveSum(16));

/* Given Helpful Links
 Polite Number
   - https://en.wikipedia.org/wiki/Polite_number
 Modulo Operation 
   - https://en.wikipedia.org/wiki/Modulo
 Binary Logarithm
   - https://en.wikipedia.org/wiki/Binary_logarithm
*/
