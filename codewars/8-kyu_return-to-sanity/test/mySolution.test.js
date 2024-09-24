// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { mystery } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(mystery(), { sanity: "Hello" });
  });
});

// Reference
// https://stackoverflow.com/questions/16745855/difference-between-equal-deep-equal-and-strict-equal
