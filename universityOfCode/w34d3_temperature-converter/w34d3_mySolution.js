function convert(str) {
  if (str.endsWith("°C")) {
    return ((parseInt(str.slice(0, -2)) * 9) / 5 + 32).toFixed(0) + "°F";
  } else if (str.endsWith("°F")) {
    return (((parseInt(str.slice(0, -2)) - 32) * 5) / 9).toFixed(0) + "°C";
  } else {
    return "Error";
  }
}

console.log(convert("35°C"));
console.log(convert("18°C"));
console.log(convert("0°F"));

/* Given Helpful Links
 Fahrenheit to Celsius Conversion (°F to °C)
   - https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 String.prototype.endsWith()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 String.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/
