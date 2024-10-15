// kelvin forecast today is 293
const kelvin = 293;
// convert to celsius
let celsius = kelvin - 273;
// convert to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// round-down the temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
