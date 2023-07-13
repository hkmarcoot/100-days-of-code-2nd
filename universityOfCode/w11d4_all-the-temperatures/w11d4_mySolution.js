function tempConversion(c) {
  var f = (c * 9) / 5 + 32;
  var k = c + 273.15;
  if (k < 0) return "Invalid";
  return [parseFloat(f.toFixed(2)), parseFloat(k.toFixed(2))];
}

console.log(tempConversion(0));
console.log(tempConversion(100));
console.log(tempConversion(-10.7));
console.log(tempConversion(-273.16));

/* Given Helpful Links
 Number.prototype.toFixed()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 Rounding Numbers After the Comma
   - https://stackoverflow.com/questions/4098685/rounding-numbers-to-2-digits-after-comma
 number() Function
   - https://www.w3schools.com/jsref/jsref_number.asp
 Temperature Conversion Table - Kelvin, Celsius, Fahrenheit
   - https://www.thoughtco.com/chemistry-temperature-conversion-table-4012466
 Math.round()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 if else else if
   - https://www.w3schools.com/js/js_if_else.asp
*/
