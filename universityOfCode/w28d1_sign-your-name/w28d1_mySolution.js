const obj = { yourSignature: "" };

function signYourName(obj) {
  /* ***** My COde ***** */
  Object.seal(obj);

  /* ******************* */

  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;
}

console.log(signYourName(obj));

// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

/* Given Helpful Links
 Object.seal()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
 Object.preventExtensions()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
*/
