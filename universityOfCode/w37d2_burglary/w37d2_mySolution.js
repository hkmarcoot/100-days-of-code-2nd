function calculateLosses(obj) {
  var sum = 0;
  for (const property in obj) {
    sum += obj[property];
  }
  return sum === 0 ? "Lucky you!" : sum;
}

console.log(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
);
console.log(
  calculateLosses({
    ring: 30000,
    painting: 20000,
    bust: 1,
  })
);
console.log(
  calculateLosses({
    chair: 3500,
  })
);
console.log(calculateLosses({}));

// Reference
/* The for...in statement */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

/* Given Helpful Links
   Object.values()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
   Array.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Number.isInteger()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  */
