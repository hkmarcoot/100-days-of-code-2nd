function getTotalPrice(arr) {
  var sum = arr.reduce((a, c) => a + c.quantity * c.price, 0);
  return sum;
}

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);
console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]));

// Reference:
// https://stackoverflow.com/questions/5732043/how-to-call-reduce-on-an-array-of-objects-to-sum-their-properties

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Number.prototype.toFixed()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 Number.parseFloat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
*/
