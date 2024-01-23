function bbqSkewers(arr) {
  var numVeg = 0;
  var numNonVeg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      numNonVeg++;
    } else {
      numVeg++;
    }
  }
  return [numVeg, numNonVeg];
}

console.log(
  bbqSkewers([
    "--oooo-ooo--",

    "--xx--x--xx--",

    "--o---o--oo--",

    "--xx--x--ox--",

    "--xx--x--ox--",
  ])
);

console.log(
  bbqSkewers([
    "--oooo-ooo--",

    "--xxxxxxxx--",

    "--o---",

    "-o-----o---x--",

    "--o---o-----",
  ])
);

console.log(
  bbqSkewers([
    "--oooo-ooo--",

    "--ooooooo--",

    "--o---",

    "-o-----o---x--",

    "--o-oooo-----",
  ])
);

/* Given Helpful Links
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   String.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  */
