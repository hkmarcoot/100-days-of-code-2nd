/********************Code Starts Here******************************/
function nestArray(array1, array2) {
  array1.sort(function (a, b) {
    return a - b;
  });
  array2.sort(function (a, b) {
    return a - b;
  });
  return (
    array1[0] > array2[0] &&
    array1[array1.length - 1] < array2[array2.length - 1]
  );
}
/********************Code Ends*************************************/

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
