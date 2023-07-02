function discountedPrice(price, discount) {
  return (price * (100 - discount)) / 100;
}

console.log(discountedPrice(1500, 50));
console.log(discountedPrice(89, 20));
console.log(discountedPrice(100, 75));

/* Given Helpful Links
 Round to at most 2 decimal places (only if necessary)
   - https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 parseFloat() Method
   - https://www.w3schools.com/jsref/jsref_parsefloat.asp
*/
