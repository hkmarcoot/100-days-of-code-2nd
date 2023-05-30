function insertDashes(arr) {
  // write code here
}

/**
 * Test Suite
 */
describe("insertDashes()", () => {
  it("insert dashes in between chars", () => {
    // arrange
    const value = "aba caba";

    // act
    const result = insertDashes(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe("a-b-a c-a-b-a");
  });
});

// Link
// https://scrimba.com/learn/javascriptmas/-insert-dashes-cof3e4e76a0074eca37e0471f
