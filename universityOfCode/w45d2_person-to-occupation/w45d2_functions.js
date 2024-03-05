/* ********************functions.js********************* */
function assignPersonToJob(names, jobs) {
  var obj = {};
  // See notes:
  // names.forEach((x, index) => Object.assign(obj, { x: jobs[index] }));
  names.forEach((x, index) => {
    obj[x] = jobs[index];
  });
  return obj;
}
module.exports = assignPersonToJob;

/*
  Notes:
  It may not work as expected because you are trying to use the value of the variable x as a property name in the object literal, which is not how object literals work in JavaScript. Instead, it treats x as a literal property name, not as a variable.
  
  If you want to dynamically set object properties based on the values in the names array and the corresponding values in the jobs array, you should use square brackets to specify the property name.
  */

/* Given Helpful Links
   Creating an Object From Two Arrays
     - https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values
   Object.fromEntries()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Working With Objects
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
