/**************Code Starts Here****************/
function oddOrEven(num) {
  let n = 0;
  for (i = 0; i < num.toString().length; i++) {
    n += parseInt(num.toString()[i]);
  }
  return n % 2 === 0 ? "even" : "odd";
}
/***************Code Ends*******************/
