function chosenWine(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0].name;
  arr.sort((a, b) => a.price - b.price);
  var secondCheapest = arr[1];
  return secondCheapest.name;
}

console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ])
);
console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine B", price: 9.99 },
  ])
);
console.log(chosenWine([{ name: "Wine A", price: 8.99 }]));
console.log(chosenWine([]));
console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 389", price: 109.99 },
    { name: "Wine 44", price: 38.44 },
    { name: "Wine 72", price: 22.77 },
  ])
);

// Reference
// https://www.quora.com/How-can-you-find-the-highest-and-lowest-in-an-array-of-objects-JavaScript-Javascript-arrays-object-average-development

/* Given Helpful Links
   Orthogonal Vectors
     - https://onlinemschool.com/math/library/vector/orthogonality/
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
