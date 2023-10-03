function sortDrinks(arr) {
  return arr.sort((a, b) => (a.price > b.price ? 1 : -1));
}

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

drinks1 = [
  { name: "lemonade", price: 90 },
  { name: "lime", price: 432 },
  { name: "peach", price: 23 },
];

console.log(sortDrinks(drinks));
console.log(sortDrinks(drinks1));

/* Given Helpful Links
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 JavaScript Array Sort
   - https://www.w3schools.com/js/js_array_sort.asp
 How to Sort an Array of Objects by a Property Value
   - https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
*/
