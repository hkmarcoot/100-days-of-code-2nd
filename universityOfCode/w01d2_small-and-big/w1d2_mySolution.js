/**********Code Starts Here************/
function smallBig(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[-1]];
}
/**********Code End********************/

/* Given Helpful Links
 Math.min()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
 Math.max()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 How to find the min/max element of an Array?
    - https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
 Spread Syntax
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/
