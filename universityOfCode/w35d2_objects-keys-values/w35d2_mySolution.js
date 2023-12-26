function keysAndValues(obj) {
  var arrA = [];
  var arrB = [];
  for (const property in obj) {
    arrA.push(property);
    arrB.push(obj[property]);
  }
  return [arrA, arrB];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

// Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

/* Given Helpful Links
   Object.keys()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   Object.values()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Object.entries()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
