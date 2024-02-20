function factorize(num) {
  var result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(factorize(12));
console.log(factorize(4));
console.log(factorize(17));

/* Given Helpful Links
   For Loop
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   Array.prototype.fill()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  */
