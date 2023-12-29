function cleanUp(arr, str) {
  var result = [];

  if (str === "prefix") {
    var newArr = arr.sort();
    var k = 0;
    var count = 0;
    do {
      var calArr = [];
      calArr.push(newArr[k]);
      count += 1;
      // Adding the last item
      if (k === newArr.length - 1) {
        result.push(calArr);
      }
      // Starting with the first item
      for (let i = k + 1; i < newArr.length; i++) {
        if (newArr[k].split(".")[0] === newArr[i].split(".")[0]) {
          calArr.push(newArr[i]);
          count += 1;
          // Push the final combination to result
          if (i === newArr.length - 1) {
            result.push(calArr);
          }
        } else {
          result.push(calArr);
          k = i;
          // Stop the loop
          i = newArr.length;
        }
      }
    } while (count !== newArr.length);
  } else if (str === "suffix") {
    /* ********Sorting************** */
    var newArr = arr;
    for (let a = 0; a < newArr.length; a++) {
      for (let b = a + 1; b < newArr.length; b++) {
        if (
          newArr[a].substring(newArr[a].indexOf(".") + 1) >
          newArr[b].substring(newArr[b].indexOf(".") + 1)
        ) {
          let tempString = newArr[a];
          newArr[a] = newArr[b];
          newArr[b] = tempString;
        }
      }
    }

    /* ********Sorting Ends********* */
    var k = 0;
    var count = 0;
    do {
      var calArr = [];
      calArr.push(newArr[k]);
      count += 1;
      // Adding the last item
      if (k === newArr.length - 1) {
        result.push(calArr);
      }
      // Starting with the first item
      for (let i = k + 1; i < newArr.length; i++) {
        if (newArr[k].split(".")[1] === newArr[i].split(".")[1]) {
          calArr.push(newArr[i]);
          count += 1;
          // Push the final combination to result
          if (i === newArr.length - 1) {
            result.push(calArr);
          }
        } else {
          result.push(calArr);
          k = i;
          // Stop the loop
          i = newArr.length;
        }
      }
    } while (count !== newArr.length);
  }
  return result;
}

console.log(
  cleanUp(
    [
      "music_app.js",
      "music_app.png",
      "music_app.wav",
      "tetris.png",
      "tetris.js",
    ],
    "prefix"
  )
);
console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix"));
console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix"));
console.log(
  cleanUp(
    [
      "project1.html",
      "project2.html",
      "project1.css",
      "project2.css",
      "project1.js",
      "project2.js",
    ],
    "suffix"
  )
);
console.log(
  cleanUp(
    [
      "music_app.js",
      "music_app.png",
      "music_app.wav",
      "tetris.png",
      "tetris.js",
    ],
    "suffix"
  )
);

//Reference
// https://stackoverflow.com/questions/19118403/sorting-strings-ending-with-numbers-by-the-ending-number
// https://stackoverflow.com/questions/4089411/javascript-grab-part-of-a-string-after-a-dot
// https://www.tutorialspoint.com/how-to-sort-strings-in-javascript#:~:text=Use%20the%20sort()%20method,string%20and%20sorts%20them%20alphabetically.

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  */
