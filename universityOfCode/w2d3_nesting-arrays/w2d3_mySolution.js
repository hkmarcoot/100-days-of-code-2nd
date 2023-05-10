/********************Code Starts Here******************************/
function nestArray(array1, array2) {
  array1.sort(function (a, b) {
    return a - b;
  });
  array2.sort(function (a, b) {
    return a - b;
  });
  return (
    array1[0] > array2[0] &&
    array1[array1.length - 1] < array2[array2.length - 1]
  );
}
/********************Code Ends*************************************/
