function brickFit(a, b, c, w, h) {
  var arr = [a, b, c];
  var hole = [w, h].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= hole[0]) {
      arr = arr.slice(0, i).concat(arr.slice(i + 1));
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] <= hole[1]) {
          return true;
        }
      }
    }
  }
  // Return false if none of the matches is found
  return false;
}

console.log(brickFit(1, 1, 1, 1, 1));
console.log(brickFit(1, 2, 1, 1, 1));
console.log(brickFit(1, 2, 2, 1, 1));
console.log(brickFit(1, 2, 2, 1, 2));
console.log(brickFit(1, 2, 2, 2, 1));
console.log(brickFit(2, 2, 2, 1, 2));

/* Given Helpful Links
 arr.some()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 sort() Function
   - https://www.w3schools.com/js/js_array_sort.asp
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
