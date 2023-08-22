function highestDigit(num) {
  var str = num.toString();
  return Math.max(...str);
}

console.log(highestDigit(51));
console.log(highestDigit(0));
console.log(highestDigit(7495037));
console.log(highestDigit(222222));

/* Given Helpful Links
 Spread syntax (...)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 Number.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Referencje/Obiekty/Number/toString?retiredLocale=pl
 Math.max()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
*/
