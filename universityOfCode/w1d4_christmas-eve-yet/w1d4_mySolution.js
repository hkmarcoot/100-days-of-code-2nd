/****************Code Starts Here********************/
function christmasEve(dateObject) {
  if (dateObject.getMonth() == 11 && dateObject.getDate() == 24) {
    return true;
  } else {
    return false;
  }
}
/****************Code Ends**************************/

// Reference:
// - https://tutorial.techaltum.com/javascript-date-object.html
