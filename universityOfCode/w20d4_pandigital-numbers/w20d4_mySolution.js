function isPandigital(num) {
  var str = num.toString();
  var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < str.length; i++) {
    arr[str[i]] += 1;
  }
  return arr.every((x) => x > 0);
}

console.log(isPandigital(98140723568910));
console.log(isPandigital(90864523148909));

/* Given Helpful Links
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 Array.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 Set.prototype.size
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
*/
