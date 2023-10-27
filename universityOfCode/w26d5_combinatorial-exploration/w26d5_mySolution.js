// Helper Function, generates factorials
function fact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}

// Calculates number of possible permutations from set n, of length k
function permutations(n) {
  var p = fact(n);
  var v = fact(0);
  return p / v;
}

function noPermsDigits(num) {
  return permutations(num).toString().length;
}

// console.log(noPermsDigits(13));

// Reference:
// https://glot.io/snippets/esqrmj6v7l
// https://javascript.plainenglish.io/how-to-solve-permutations-in-javascript-502cc4522482
// https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript

/* Given Helpful Links
 Combinatorics
   - https://en.wikipedia.org/wiki/Combinatorics
 Combinatorial Explosion
   - https://en.wikipedia.org/wiki/Combinatorial_explosion
 BigInt
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/
