// Helper Function, generates factorials
function fact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}

// Calculates number of possible permutations from set n, of length k
function paths(n) {
  var p = fact(n);
  var v = fact(0);
  return p / v;
}

// Reference:
// https://glot.io/snippets/esqrmj6v7l
// https://javascript.plainenglish.io/how-to-solve-permutations-in-javascript-502cc4522482

/* Given Helpful Links
 Factorialize a Number
   - https://stackoverflow.com/questions/32147732/factorialize-a-number/32148163#32148163
 Traveling Salesman Number of Possible Routes
   - https://math.stackexchange.com/questions/1726052/traveling-salesman-number-of-possible-routes
*/
