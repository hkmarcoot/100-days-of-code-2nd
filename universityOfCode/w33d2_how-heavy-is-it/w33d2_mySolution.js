function weight(r, h) {
  return ((Math.PI * Math.pow(r, 2) * h) / 1000).toFixed(2);
}

console.log(weight(4, 10));
console.log(weight(30, 60));
console.log(weight(15, 10));

/* Given Helpful Links
 Number.prototype.toFixed()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 Math.PI
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
 Math.pow()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
 Volume of a Cylinder
   - https://www.varsitytutors.com/hotmath/hotmath_help/topics/volume-of-a-cylinder#:~:text=The%20formula%20for%20the%20volume,V%3Dπr2h%20.
 Conversion Cubic Centimetre to Cubic Decimetre
   - https://www.conversionunites.com/converter-cubic-centimetre-to-cubic-decimetre
 Liters to Cubic Decimeters Conversion L to dm³
   - https://www.milliliter.org/liters-to-cubic-decimeters-conversion
 Exponentiation (**)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
 Converting Strings to Numbers
   - https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
*/
