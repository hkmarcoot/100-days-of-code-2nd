function split(num) {
  return [Math.floor(num / 2), num - Math.floor(num / 2)];
}

console.log(split(4));
console.log(split(10));
console.log(split(11));
console.log(split(0));
console.log(split(1));
console.log(split(-4));
console.log(split(-5));
console.log(split(-9));

/* Given Helpful Links
 Math.floor()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 Math.ceil()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
 Array.prototype.push()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/
