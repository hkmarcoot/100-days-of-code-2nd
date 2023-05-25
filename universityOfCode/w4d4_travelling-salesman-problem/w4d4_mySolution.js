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
