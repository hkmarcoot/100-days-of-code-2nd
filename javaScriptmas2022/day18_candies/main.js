function candies(children, candy) {
  //  write code here.
  return Math.floor(candy / children) * children;
}

/**
 * Test Suite
 */
describe("candies()", () => {
  it("returns ammount of total equal candy to be eaten", () => {
    // arrange
    const children = 3;
    const candy = 10;

    // act
    const result = candies(children, candy);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(9);
  });
});

// Link
// https://scrimba.com/scrim/co04a4f5499c7d4454f5806ee
