function candies(children, candy) {
  //  write code here.
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
// https://scrimba.com/learn/javascriptmas/-candies-cLkqvpcQ
