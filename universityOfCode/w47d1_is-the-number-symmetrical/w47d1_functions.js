/* *******************functions.js************************* */
function isSymmetrical(num) {
  var index = 0;
  var arr = num.toString().split("");
  var reversearr = [];
  var secondpartarr = [];
  if (num.toString().length === 1) return true;
  if (num.toString().length % 2 === 0) {
    index = Math.floor((num.toString().length - 1) / 2);
    secondpartarr = arr.slice(index + 1);
  } else {
    index = (num.toString().length - 1) / 2 - 1;
    secondpartarr = arr.slice(index + 2);
  }

  for (var i = index; i >= 0; i--) {
    reversearr.push(arr[i]);
  }

  console.log("reversearr: " + reversearr);
  console.log("secondpartarr: " + secondpartarr);

  return JSON.stringify(reversearr) === JSON.stringify(secondpartarr);
}
module.exports = isSymmetrical;

// Reference
// https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/

/* Given Helpful Links
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  */
