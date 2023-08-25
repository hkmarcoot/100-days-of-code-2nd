function product(...nums) {
  var total = 0;
  var count = "";
  var result = 1;
  for (const num of nums) {
    total += num;
  }
  count = total.toString();
  do {
    result = 1;
    for (let i = 0; i < count.length; i++) {
      result = result * parseInt(count[i]);
    }
    if (result.toString().length !== 1) {
      count = result.toString();
    }
  } while (result.toString().length !== 1);

  return parseInt(result);
}

console.log(product(16, 28));
console.log(product(1, 2, 3, 4, 5, 6));
console.log(product(8, 16, 89, 3));

// Reference
// https://stackoverflow.com/questions/10952615/how-can-i-find-the-length-of-a-number

/* Given Helpful Links
 Rest Parameters
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 Array.prototype.reduce
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 while
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
