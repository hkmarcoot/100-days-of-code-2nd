/* ***********************functions.js*************************** */
function primorial(num) {
  var result = 1;
  var numOfPrime = 0;

  var testPrime = 2;
  do {
    var prime = "Yes";
    for (let count = 2; count * count <= testPrime; count++) {
      if (testPrime % count === 0) {
        prime = "No";
      }
    }

    if (prime === "Yes") {
      result = result * testPrime;
      numOfPrime++;
    }

    testPrime++;
  } while (num != numOfPrime);
  return result;
}
module.exports = primorial;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Primorial
     - https://en.wikipedia.org/wiki/Primorial
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
