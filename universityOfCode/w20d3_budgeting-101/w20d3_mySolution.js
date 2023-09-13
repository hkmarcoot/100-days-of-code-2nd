function budget(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].budget;
  }
  return result;
}

function budget2(arr) {
  var result = 0;
  arr.forEach((x) => (result += x.budget));
  return result;
}

function budget3(arr) {
  return arr.reduce((a, c) => a + c.budget, 0);
}

console.log(
  budget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);
console.log(
  budget2([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);
console.log(
  budget3([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.forEach()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Arrow Functions
   - https://www.w3schools.com/js/js_arrow_function.asp
 Method Chaining in JavaScript
   - https://dev.to/nedsoft/method-chaining-in-javascript-3klb
*/
