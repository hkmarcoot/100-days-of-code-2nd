function spotlightSum(num) {
  var arr = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  ];
  var digits = [];
  var sum = 0;
  while (num != 0) {
    digits.push(num % 10);
    num = Math.trunc(num / 10);
  }
  digits.reverse();
  sum =
    arr[digits[0] - 1][digits[1] - 2] +
    arr[digits[0] - 1][digits[1] - 1] +
    arr[digits[0] - 1][digits[1]] +
    arr[digits[0]][digits[1] - 2] +
    arr[digits[0]][digits[1] - 1] +
    arr[digits[0]][digits[1]] +
    arr[digits[0] + 1][digits[1] - 2] +
    arr[digits[0] + 1][digits[1] - 1] +
    arr[digits[0] + 1][digits[1]];
  return sum;
}
console.log(spotlightSum(45));
console.log(spotlightSum(19));
console.log(spotlightSum(48));
console.log(spotlightSum(88));

// Reference
// https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits

/* Given Helpful Links
 Multidimensional Array
   - https://www.javascripttutorial.net/javascript-multidimensional-array/
*/
