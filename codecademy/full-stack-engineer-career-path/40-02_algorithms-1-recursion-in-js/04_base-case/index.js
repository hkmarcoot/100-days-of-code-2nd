const recursiveFactorial = (n) => {
  // Add a condition below
  if (n === 0) {
    return 1;
  }

  if (n > 0) {
    console.log(`Execution context: ${n}`);

    return recursiveFactorial(n - 1) * n;
  }
};

const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);

module.exports = {
  recursiveFactorial,
};
