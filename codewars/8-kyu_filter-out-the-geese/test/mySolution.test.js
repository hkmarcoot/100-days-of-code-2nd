// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { gooseFilter } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

function generateTestArray() {
  let arrayLength = Math.floor(Math.random() * 80);
  let birds = [
    "Mallard",
    "Barbary",
    "Hook Bill",
    "Blue Swedish",
    "Crested",
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  let result = [];
  for (let i = 0; i < arrayLength; i++) {
    result.push(birds[Math.floor(Math.random() * birds.length)]);
  }
  return result;
}

describe("Random tests", function () {
  let gooseFilterCheck = (a) =>
    a.filter(
      (x) =>
        [
          "African",
          "Roman Tufted",
          "Toulouse",
          "Pilgrim",
          "Steinbacher",
        ].indexOf(x) === -1
    );
  for (let i = 1; i <= 100; i++) {
    it("Random test " + i, function () {
      let testArray = generateTestArray();
      assert.deepEqual(
        gooseFilter(testArray.slice()),
        gooseFilterCheck(testArray)
      );
    });
  }
});
