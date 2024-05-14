/* ****************functions.js****************** */
function evenOddTransform(arr, num) {
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0) {
        arr[j] = arr[j] - 2;
      } else {
        arr[j] = arr[j] + 2;
      }
    }
  }
  return arr;
}
module.exports = evenOddTransform;

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   How do you use the ? : (conditional) operator in JavaScript?
     - https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
   How To Use .map() to Iterate Through Array Items in JavaScript
     - https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
  */
