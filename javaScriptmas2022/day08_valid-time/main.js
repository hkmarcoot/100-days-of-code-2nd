function validTime(str) {
  //  write code here.
  let array = str.split(":");
  if (
    parseInt(array[0]) >= 0 &&
    parseInt(array[0]) <= 24 &&
    parseInt(array[1]) >= 0 &&
    parseInt(array[1]) <= 60
  ) {
    if (parseInt(array[0]) === 24 && parseInt(array[1]) > 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

/**
 * Test Suite
 */
describe("validTime()", () => {
  it("returns true for valid time", () => {
    // arrange
    const str = "13:58";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns false when invalid hours", () => {
    // arrange
    const str = "25:51";

    // act
    const result = validTime(str);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(false);
  });

  it("returns false when invalid minutes", () => {
    // arrange
    const str = "02:76";

    // act
    const result = validTime(str);

    // log
    console.log("result 3: ", result);

    // assert
    expect(result).toBe(false);
  });
});

// Link
// https://scrimba.com/scrim/co616408ab35779667725b814
