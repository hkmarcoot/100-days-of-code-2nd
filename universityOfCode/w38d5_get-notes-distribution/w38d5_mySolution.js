function getNotesDistribution(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].notes.length; j++) {
      if (arr[i].notes[j] > 0 && arr[i].notes[j] <= 5) {
        // typeof obj[arr[i].notes[j]] === 'undefined' ? obj[arr[i].notes[j]] = 1 : obj[arr[i].notes[j]]++;
        obj[arr[i].notes[j]] = (obj[arr[i].notes[j]] ?? 0) + 1;
      }
    }
  }
  return obj;
}

console.log(
  getNotesDistribution([
    { name: "steve", notes: [5, 5, 3, -1, 6] },
    { name: "John", notes: [3, 2, 5, 0, -3] },
  ])
);

// Reference
// https://sentry.io/answers/how-can-i-add-a-key-value-pair-to-a-javascript-object/
// https://stackoverflow.com/questions/39590858/how-to-increment-a-value-in-a-javascript-object

/* Given Helpful Links
   forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   filter()Method
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   
  */
