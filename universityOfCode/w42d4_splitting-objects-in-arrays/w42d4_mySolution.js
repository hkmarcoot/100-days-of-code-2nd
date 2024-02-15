function splitBunches(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].quantity; j++) {
      result.push({ name: arr[i].name, quantity: 1 });
    }
  }
  return result;
}

console.log(splitBunches([{ name: "bananas", quantity: 2 }]));
console.log(
  splitBunches([
    { name: "bananas", quantity: 2 },
    { name: "grapes", quantity: 2 },
  ])
);

/* Given Helpful Links
   for
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   Spread syntax (...)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
