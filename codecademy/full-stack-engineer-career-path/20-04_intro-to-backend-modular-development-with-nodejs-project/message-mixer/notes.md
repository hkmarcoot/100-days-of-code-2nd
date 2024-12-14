To export a value from a Node module, you can assign a value to the module.exports object like so:

```
// Export a named function.
module.exports.functionToExport = functionToExport;

// or... export a function expression.
module.exports.functionToExport = () => {};

```

Or you can assign module.exports to an object of the exported values:

```
module.exports = {
  functionToExportA,
  functionToExportB
};

```

There are a few ways to extract values out of an object. The quickest is with object destructuring syntax:

```
const { valueA, valueB, valueC } = object;

```

Alternatively, you can extract each value one at a time:

```
const valueA = object.valueA;
const valueB = object.valueB;

```

You can use object destructuring and the require() function to import multiple values from a module:

```
const { valueA, valueB, valueC } = require('/path/to/myModule');

```

encryptors.js is in the same folder as super-encoder.js so the relative file path will be './encryptors.js'.
