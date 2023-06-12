/***********************Code Starts Here************************/
function countTrue(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      temp += 1;
    }
  }
  return temp;
}
/***********************Code Ends********************************/

/* Given Helpful Links
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Arrow Function
   - https://www.w3schools.com/js/js_arrow_function.asp
 Array.prototype.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
*/
