function cubeDiagonal(vol) {
  var length = Math.cbrt(vol);
  var twodDiagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(length, 2));
  var threedDiagonal = Math.sqrt(
    Math.pow(twodDiagonal, 2) + Math.pow(length, 2)
  );
  return threedDiagonal.toFixed(2);
}

console.log(cubeDiagonal(8));
console.log(cubeDiagonal(343));
console.log(cubeDiagonal(1157.625));

/* Given Helpful Links
 Math.cbrt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
 How to Find the Diagonal of a Cube
   - https://www.varsitytutors.com/intermediate_geometry-help/how-to-find-the-diagonal-of-a-cube
 Math.sqrt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
*/
