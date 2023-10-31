function longestTime(h, m, s) {
  var hSecond = h * 60 * 60;
  var mSecond = m * 60;
  var array = [hSecond, mSecond, s].sort((a, b) => b - a);
  if (array[0] === hSecond) {
    return h;
  } else if (array[0] === mSecond) {
    return m;
  } else if (array[0] === s) {
    return s;
  }
}

console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));

/* Given Helpful Links
 Math.max()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 Array.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
