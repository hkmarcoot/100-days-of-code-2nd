function maximumScore(arr) {
  return arr.reduce((acc, obj) => acc + obj.score, 0);
}

console.log(
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);
console.log(
  maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 },
  ])
);
console.log(
  maximumScore([
    { tile: "M", score: 3 },
    { tile: "Q", score: 10 },
    { tile: "O", score: 1 },
    { tile: "E", score: 1 },
    { tile: "E", score: 1 },
    { tile: "I", score: 1 },
    { tile: "A", score: 1 },
  ])
);
console.log(
  maximumScore([
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
    { tile: "O", score: 1 },
    { tile: "E", score: 1 },
    { tile: "E", score: 1 },
    { tile: "I", score: 1 },
    { tile: "A", score: 1 },
  ])
);

// Reference:
// https://stackoverflow.com/questions/5732043/how-to-call-reduce-on-an-array-of-objects-to-sum-their-properties

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Arrow Function
   - https://www.w3schools.com/js/js_arrow_function.asp
 How to Use Object Destructuring
   - https://dmitripavlutin.com/javascript-object-destructuring/
*/
