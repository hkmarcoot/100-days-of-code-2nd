function convertedArray(obj) {
  return Object.entries(obj);
}

/***or***/

function convertedArray(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

// Reference:
// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
// https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
