function mean(arr) {
  var sum = arr.reduce((a, c) => a + c, 0);
  return (sum / arr.length).toFixed(2);
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));
console.log(mean([324, 543, 654, 9876]));

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Number.parseFloat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
   Number.prototype.toFixed()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
   Array.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   toFixed() Method
     - https://www.w3schools.com/jsref/jsref_tofixed.asp
  */
