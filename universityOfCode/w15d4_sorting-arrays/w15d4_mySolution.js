function sortArray(arr, str) {
  if (str === "Asc") {
    return arr.sort((a, b) => a - b);
  } else if (str === "Des") {
    return arr.sort((a, b) => b - a);
  } else if (str === "None") {
    return arr;
  }
}

console.log(sortArray([4, 3, 2, 1], "Asc"));
console.log(sortArray([7, 8, 11, 66], "Des"));
console.log(sortArray([1, 2, 3, 4], "None"));

/* Given Helpful Links
 sort() Function
   - https://www.w3schools.com/js/js_array_sort.asp
 Switch
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 Objects
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 Arrow Function
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
