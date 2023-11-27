function reverseArr(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
}

console.log(reverseArr(1485979));
console.log(reverseArr(623478));
console.log(reverseArr(12345));
console.log(reverseArr(202069));

/* Given Helpful Links
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.prototype.reverse() 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
*/
