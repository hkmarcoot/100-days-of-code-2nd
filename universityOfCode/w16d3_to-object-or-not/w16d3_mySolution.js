function isObject(item) {
  return typeof item === "object";
}

console.log(isObject(new Date()));
console.log(isObject("12/12/2011"));
console.log(isObject(null));
console.log(isObject([1, 2, 3]));
console.log(isObject({}));

/* Given Helpful Links
 instanceof
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
 typeof
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#null
 Comparing the JavaScript typeof and instanceof Operators
   - https://levelup.gitconnected.com/comparing-the-javascript-typeof-and-instanceof-operators-8844f23633a
 How do you check if a value is an Object in JavaScript?
   - https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
 Why is null considered an object in JavaScript?
   - https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined
*/
