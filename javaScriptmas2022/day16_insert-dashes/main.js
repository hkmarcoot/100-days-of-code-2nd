function insertDashes(arr) {
  // write code here
  arr = arr.split(" ");

  return arr.map((x) => x.split("").join("-")).join(" ");
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
// https://scrimba.com/scrim/co1034bd1b772f7d88d42591d
