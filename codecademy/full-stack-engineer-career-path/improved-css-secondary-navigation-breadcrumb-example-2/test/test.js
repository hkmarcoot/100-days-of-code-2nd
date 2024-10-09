console.log = function () {};

const fs = require("fs");
const code = fs.readFileSync("breadcrumb.css", "utf8");
const assert = require("chai").assert;

// step 1: CSS regex
let CSS_RegEx1 =
  /\.breadcrumb\s*a\s*:*\s*before\s*{\s*left\s*:\s*-10px[^}]*border-left-color\s*:\s*transparent[^}]*}/; // put your css selectors here

let found1 = CSS_RegEx1.test(code);

describe("", function () {
  it("", function () {
    assert.strictEqual(
      found1,
      true,
      "Within the `.breadcrumb a::before` selector there should be a `border-left-color` property set to the value `transparent`"
    );
  });
});
